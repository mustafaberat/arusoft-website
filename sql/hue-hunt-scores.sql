-- Hue Hunt top-5. Neon SQL editor'da bir kez çalıştırılabilir;
-- API ilk istekte CREATE TABLE IF NOT EXISTS de çalıştırır.
CREATE TABLE IF NOT EXISTS hue_hunt_scores (
  id SERIAL PRIMARY KEY,
  name VARCHAR(16) NOT NULL,
  level INTEGER NOT NULL CHECK (level >= 1 AND level <= 999),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS hue_hunt_scores_rank
  ON hue_hunt_scores (level DESC, created_at ASC);
