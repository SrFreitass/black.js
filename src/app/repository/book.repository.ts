import { BaseRepository, type database } from "./base.repository";

export class BookRepository extends BaseRepository {
  constructor(database: database) {
    super(database);
  }

  async getBook(id: string) {
    const query = await this.database.query(
      "SELECT * FROM books WHERE id = $1",
      [id],
    );
    return query.rows;
  }
}
