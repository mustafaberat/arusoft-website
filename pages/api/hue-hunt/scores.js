/**
 * GET  /api/hue-hunt/scores  → { scores: [{ name, level }] }
 * POST /api/hue-hunt/scores  → { accepted, scores }  body: { name, level }
 *
 * Flutter uygulama son can kalınca GET'i önden çeker.
 */
import {
  listTop,
  parseLevel,
  sanitizeName,
  submitScore,
} from '../../../lib/hue-hunt-scores';

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function fail(res, status, error) {
  return res.status(status).json({ error });
}

export default async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    if (req.method === 'GET') {
      const scores = await listTop();
      return res.status(200).json({ scores });
    }

    if (req.method === 'POST') {
      const name = sanitizeName(req.body?.name);
      const level = parseLevel(req.body?.level);
      if (!name) {
        return fail(res, 400, 'invalid_name');
      }
      if (level == null) {
        return fail(res, 400, 'invalid_level');
      }
      const result = await submitScore(name, level);
      return res.status(200).json(result);
    }

    res.setHeader('Allow', 'GET, POST, OPTIONS');
    return fail(res, 405, 'method_not_allowed');
  } catch (err) {
    const status = err.status || 500;
    if (status === 503) {
      return fail(res, 503, 'database_unavailable');
    }
    console.error('hue-hunt scores', err);
    return fail(res, 500, 'server_error');
  }
}
