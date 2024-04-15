import type { RouterParam } from "../@type/type";

export class BlackRouter {
  protected routers: Record<
    string,
    {
      method: string;
      func: (request: Request) => Response;
      middleware?: (req: Request, next: () => Response) => Response;
      searchParams?: string;
    }
  > = {};

  router(func: (routerMethods: RouterParam) => void) {
    const router = {
      delete: this.delete,
      get: this.get,
      patch: this.patch,
      post: this.post,
      put: this.put,
      routers: this.routers,
    };

    func(router);
  }

  get(
    path: string,
    func: (request: Request) => Response,
    middleware?: (req: Request, next: () => Response) => Response,
  ) {
    let searchParams = "";

    if (path.includes(":")) {
      const pathSplited = path.split(":");
      searchParams = pathSplited[pathSplited.length - 1];
      console.log(searchParams);
      path = `${pathSplited[0]}searchParams`;
    }

    this.routers[path] = {
      method: "GET",
      func,
      searchParams,
      middleware,
    };
  }

  post(
    path: string,
    func: (request: Request) => Response,
    middleware?: (req: Request, next: () => Response) => Response,
  ) {
    this.routers[path] = {
      method: "POST",
      func,
      searchParams: [this.getSearchParams(path)],
      middleware,
    };
  }

  patch(
    path: string,
    func: (request: Request) => Response,
    middleware?: (req: Request, next: () => Response) => Response,
  ) {
    this.routers[path] = {
      method: "PATCH",
      func,
      searchParams: [this.getSearchParams(path)],
      middleware,
    };
  }

  put(
    path: string,
    func: (request: Request) => Response,
    middleware?: (req: Request, next: () => Response) => Response,
  ) {
    this.routers[path] = {
      method: "PUT",
      func,
      searchParams: [this.getSearchParams(path)],
      middleware,
    };
  }

  delete(
    path: string,
    func: (request: Request) => Response,
    middleware?: (req: Request, next: () => Response) => Response,
  ) {
    this.routers[path] = {
      method: "DELETE",
      func,
      searchParams: [this.getSearchParams(path)],
      middleware,
    };
  }
}
