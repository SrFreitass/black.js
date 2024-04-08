import { BlackServer } from "../../black.js/server/server";
import anotations from "./router/anotations";

const server = new BlackServer({ port: 3000 });

server.get(
  "/",
  (req) => {
    console.log("Req");
    return new Response("...");
  },
  (req, next) => {
    console.log("Passou no middleware");
    return new Response("Not Authorized");
  },
);

server.plugin(anotations.execute);
