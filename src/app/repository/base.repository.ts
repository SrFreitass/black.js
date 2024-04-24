import { db } from "../db/database";

export type database = typeof db;

export class BaseRepository {
  protected database: database;

  constructor(database: database) {
    this.database = database;
  }
}
