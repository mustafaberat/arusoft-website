/**
 * Veri katmanı. Yalnızca Drizzle (parametreli sorgu). İş kuralı yok.
 * Tablo sql/hue-hunt-scores.sql ile oluşturuldu; burada CREATE yok.
 */
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { asc, desc, notInArray } from 'drizzle-orm';

import { scoreToJson } from './model';
import { hueHuntScores } from './schema';

function db() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) {
    const err = new Error('DATABASE_URL missing');
    err.status = 503;
    throw err;
  }
  return drizzle(neon(url));
}

export async function findTop(limit) {
  const rows = await db()
    .select({
      name: hueHuntScores.name,
      level: hueHuntScores.level,
    })
    .from(hueHuntScores)
    .orderBy(desc(hueHuntScores.level), asc(hueHuntScores.createdAt))
    .limit(limit);
  return rows.map(scoreToJson);
}

export async function insertScore({ name, level }) {
  await db().insert(hueHuntScores).values({ name, level });
}

/** En iyi `limit` id dışındakileri siler. id listesi bind edilir. */
export async function keepOnlyTop(limit) {
  const keep = await db()
    .select({ id: hueHuntScores.id })
    .from(hueHuntScores)
    .orderBy(desc(hueHuntScores.level), asc(hueHuntScores.createdAt))
    .limit(limit);
  const keepIds = keep.map((row) => row.id);
  if (keepIds.length === 0) {
    return;
  }
  await db().delete(hueHuntScores).where(notInArray(hueHuntScores.id, keepIds));
}
