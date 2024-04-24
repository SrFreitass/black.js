import type { BookRepository } from "../repository/book.repository";

export class GetBookByIdUseCase {
  constructor(private readonly BookRepository: BookRepository) {}
  async execute(id: string) {
    if (!id) {
      return {
        message: "ID is missing",
      };
    }

    return await this.BookRepository.getBook(id);
  }
}
