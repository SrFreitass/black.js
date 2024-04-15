import { type Server } from "bun";
import figlet from "figlet";
import { BlackRouter } from "../router/router";

export class BlackServer extends BlackRouter {
  private server: Server;
  private port: number;

  constructor({ port }: { port: number }) {
    super();
    const routers = this.routers;
    this.port = port;
    this.server = Bun.serve({
      port,
      fetch(req) {
        const method = req.method;
        const path = new URL(req.url);
        const pathnameSplited = path.pathname.split("/");
        let route = null;

        if (routers[path.pathname]) {
          route = routers[path.pathname];
          req = {
            params: {
              [route.searchParams || ""]:
                pathnameSplited[pathnameSplited.length - 1],
            },
            ...req,
          };
        }

        route =
          routers[
            `/${pathnameSplited[pathnameSplited.length - 2]}/searchParams`
          ];

        if (route && route.method === method) {
          console.log(route.searchParams);

          if (route.middleware) {
            const next = () => {
              return route.func(req);
            };

            return route.middleware(req, next);
          }

          return route.func(req);
        }

        return new Response(`Not found route in ${this.hostname}:${port}`);
      },
    });

    console.log(figlet.textSync("Black.js"));
    console.log(`Server listening on PORT ${port}`);
  }

  plugin(func: (server: BlackServer) => void) {
    func(this);
  }
}
