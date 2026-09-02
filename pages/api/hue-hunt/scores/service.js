/**
 * İş kuralları. HTTP ve SQL bilmez; JSON alanlarını model'den okur.
 *
 * - Tablo dolu değilse her geçerli skor yazılır.
 * - Doluysa yalnızca 5. sıradan yüksek level kabul.
 */
import { Score, scoreFromJson } from './model';
import * as scoresRepo from './repository';

const { board, nameMin, nameMax, levelMin, levelMax } = Score.limits;

/** SQL'e gitmeden önce: harf/rakam dışı ve tırnak/operatör elenir. */
const NAME_OK = /^[\p{L}\p{N} _.-]+$/u;

function sanitizeName(raw) {
  if (typeof raw !== 'string') {
    return null;
  }
  const name = raw.replace(/\s+/g, ' ').trim();
  if (name.length < nameMin || name.length > nameMax) {
    return null;
  }
  if (!NAME_OK.test(name)) {
    return null;
  }
  return name;
}

function parseLevel(raw) {
  const level = Number(raw);
  if (!Number.isInteger(level) || level < levelMin || level > levelMax) {
    return null;
  }
  return level;
}

function qualifies(top, level) {
  if (top.length < board) {
    return true;
  }
  return level > top[top.length - 1][Score.json.level];
}

export async function getScores() {
  return scoresRepo.findTop(board);
}

export async function submitScore(body) {
  const input = scoreFromJson(body);
  const name = sanitizeName(input.name);
  const level = parseLevel(input.level);
  if (!name) {
    return { error: 'invalid_name' };
  }
  if (level == null) {
    return { error: 'invalid_level' };
  }

  const top = await scoresRepo.findTop(board);
  if (!qualifies(top, level)) {
    return { accepted: false, scores: top };
  }

  await scoresRepo.insertScore({ name, level });
  await scoresRepo.keepOnlyTop(board);
  return { accepted: true, scores: await scoresRepo.findTop(board) };
}
