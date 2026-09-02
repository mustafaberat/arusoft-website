/**
 * HTTP katmanı. Method, CORS, status. İş kuralı yok.
 *
 * GET  /api/hue-hunt/scores  → { scores }
 * POST /api/hue-hunt/scores  → { accepted, scores }  body: { name, level }
 */
import { getScores, submitScore } from './service';

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
      return res.status(200).json({ scores: await getScores() });
    }

    if (req.method === 'POST') {
      const result = await submitScore(req.body);
      if (result.error === 'invalid_name' || result.error === 'invalid_level') {
        return fail(res, 400, result.error);
      }
      return res.status(200).json({
        accepted: result.accepted,
        scores: result.scores,
      });
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
