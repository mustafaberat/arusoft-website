/**
 * Skor kaydı — Go struct + json/db tag karşılığı.
 *
 *   type Score struct {
 *     Name  string `json:"name"  db:"name"`
 *     Level int    `json:"level" db:"level"`
 *   }
 *
 * JS'te struct yok; tek kaynak bu obje. JSON gövde ve Postgres kolon
 * adları buradan okunur, string literal dağılmaz.
 */
export const Score = {
  table: 'hue_hunt_scores',
  json: {
    name: 'name',
    level: 'level',
  },
  db: {
    id: 'id',
    name: 'name',
    level: 'level',
    createdAt: 'created_at',
  },
  limits: {
    board: 5,
    nameMin: 2,
    nameMax: 16,
    levelMin: 1,
    levelMax: 999,
  },
};

/** POST body → { name, level }. Anahtarlar Score.json. */
export function scoreFromJson(body) {
  if (body == null || typeof body !== 'object') {
    return { name: undefined, level: undefined };
  }
  return {
    name: body[Score.json.name],
    level: body[Score.json.level],
  };
}

/** DB satırı → API JSON. Anahtarlar yine Score.json. */
export function scoreToJson(row) {
  return {
    [Score.json.name]: row.name,
    [Score.json.level]: Number(row.level),
  };
}
