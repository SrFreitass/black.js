import type { BlackServer } from "../../../black.js/server/server";

class AnotationsRouter {
  execute(BlackServer: BlackServer) {
    BlackServer.post("/anotation", (req) => {
      console.log(req.body);
      return new Response(req.body);
    });

    BlackServer.get("/anotations", (req) => {
      return new Response("anotations");
    });
  }
}

export default new AnotationsRouter();
