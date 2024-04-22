import { type Server } from "bun";
import figlet from "figlet";
import { BlackRouter } from "../router/router";
import type { BlackRequest, RouteType, RouterParam } from "../@type/type";

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
        const pathnameSplit = path.pathname.split("/");
        let route = routers[path.pathname]

        if (route) {
          req = {
            ...req,
          } as BlackRequest;
        }

        console.log(route)

        if(!route) {
          console.log(pathnameSplit, routers)

          route =
            routers[
              `/${pathnameSplit[pathnameSplit.length - 2]}/searchParams`
            ];

            if(route) {
              req = {
                params: {
                  [route.searchParams?.params as string]: pathnameSplit[pathnameSplit.length - 1]
                },
                ...req
              } as BlackRequest
            } else {
              return new Response(`Not found route in ${this.hostname}:${port}`);
            }    
        }

        if (route.method === method) {
          console.log(route.searchParams);

          if (route.middleware) {
            const next = () => {
              return route.func(req as BlackRequest);
            };

            
            const middleware = route.middleware(req as BlackRequest, next)

            return middleware instanceof Response ? middleware : new Response("Return a response object (Black.js)");
          }

          return route.func(req as BlackRequest);
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
