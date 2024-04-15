import type { BlackRequest } from "../../../black.js/@type/type";

class GetBookController {
  execute(req: BlackRequest) {
    console.log(req);
    return new Response(
      JSON.stringify({
        hello: "world",
      }),
      {
        status: 201,
      },
    );
  }
}

export default new GetBookController();
