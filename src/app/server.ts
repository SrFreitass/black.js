import { BlackServer } from "../../black.js/server/server";
import router from "./router/router";

const server = new BlackServer({ port: 3000 });
server.router(router.execute);
