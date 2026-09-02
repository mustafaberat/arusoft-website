/**
 * Hue Hunt top-5 leaderboard. Neon Postgres (DATABASE_URL).
 * Sıra: yüksek level, eşitlikte önce yazılan kalır.
 */
import { neon } from '@neondatabase/serverless';

export const SCOREBOARD_SIZE = 5;
export const NAME_MIN = 2;
export const NAME_MAX = 16;
export const LEVEL_MIN = 1;
export const LEVEL_MAX = 999;

let _ensured = false;

function sql() {
  const url =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.NEON_DATABASE_URL;
  if (!url) {
    const err = new Error('DATABASE_URL missing');
    err.status = 503;
    throw err;
  }
  return neon(url);
}

export async function ensureTable() {
  if (_ensured) {
    return;
  }
  const db = sql();
  await db`
    CREATE TABLE IF NOT EXISTS hue_hunt_scores (
      id SERIAL PRIMARY KEY,
      name VARCHAR(16) NOT NULL,
      level INTEGER NOT NULL CHECK (level >= 1 AND level <= 999),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await db`
    CREATE INDEX IF NOT EXISTS hue_hunt_scores_rank
      ON hue_hunt_scores (level DESC, created_at ASC)
  `;
  _ensured = true;
}

export async function listTop() {
  await ensureTable();
  const rows = await sql()`
    SELECT name, level
    FROM hue_hunt_scores
    ORDER BY level DESC, created_at ASC
    LIMIT ${SCOREBOARD_SIZE}
  `;
  return rows.map((row) => ({ name: row.name, level: Number(row.level) }));
}

export function sanitizeName(raw) {
  if (typeof raw !== 'string') {
    return null;
  }
  const name = raw.replace(/\s+/g, ' ').trim();
  if (name.length < NAME_MIN || name.length > NAME_MAX) {
    return null;
  }
  if (!/^[\p{L}\p{N} _.-]+$/u.test(name)) {
    return null;
  }
  return name;
}

export function parseLevel(raw) {
  const level = Number(raw);
  if (!Number.isInteger(level) || level < LEVEL_MIN || level > LEVEL_MAX) {
    return null;
  }
  return level;
}

export function qualifies(top, level) {
  if (top.length < SCOREBOARD_SIZE) {
    return true;
  }
  return level > top[top.length - 1].level;
}

export async function submitScore(name, level) {
  await ensureTable();
  const db = sql();
  const top = await listTop();
  if (!qualifies(top, level)) {
    return { accepted: false, scores: top };
  }

  await db`
    INSERT INTO hue_hunt_scores (name, level)
    VALUES (${name}, ${level})
  `;
  await db`
    DELETE FROM hue_hunt_scores
    WHERE id NOT IN (
      SELECT id FROM (
        SELECT id
        FROM hue_hunt_scores
        ORDER BY level DESC, created_at ASC
        LIMIT ${SCOREBOARD_SIZE}
      ) AS keep
    )
  `;
  return { accepted: true, scores: await listTop() };
}
