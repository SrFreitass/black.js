import type { RouterParam } from "../../../black.js/@type/type";
import getBookController from "../controller/getBook.controller";

class Router {
  execute(route: RouterParam) {
    route.get("/book/:id", getBookController.execute, (req, next) => {
      return next();
    });
  }
}

export default new Router();
