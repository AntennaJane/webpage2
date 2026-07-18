CREATE TABLE IF NOT EXISTS hits (
  day   TEXT NOT NULL,   -- YYYY-MM-DD (UTC)
  agent TEXT NOT NULL,   -- 分類済みエージェント名 (生 UA は保存しない)
  count INTEGER NOT NULL DEFAULT 0,
  last  TEXT NOT NULL,   -- 最終来訪 (UTC, YYYY-MM-DD HH:MM:SS)
  PRIMARY KEY (day, agent)
);
