import type { BlackRequest } from "../../../black.js/@type/type";
import { db } from "../db/database";
import { BookRepository } from "../repository/book.repository";
import { GetBookByIdUseCase } from "../usecase/getBookById.usecase";

class GetBookController {
  async execute(req: BlackRequest) {
    const id = req.params.id;
    const useCase = new GetBookByIdUseCase(new BookRepository(db));
    const response = await useCase.execute(id);
    return new Response(JSON.stringify(response));
  }
}

export default new GetBookController();
