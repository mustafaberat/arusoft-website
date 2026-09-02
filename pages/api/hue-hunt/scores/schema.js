import { integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

import { Score } from './model';

const col = Score.db;

export const hueHuntScores = pgTable(Score.table, {
  id: serial(col.id).primaryKey(),
  name: varchar(col.name, { length: Score.limits.nameMax }).notNull(),
  level: integer(col.level).notNull(),
  createdAt: timestamp(col.createdAt, { withTimezone: true }).notNull().defaultNow(),
});
