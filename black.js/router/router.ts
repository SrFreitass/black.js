export class BlackRouter {
  protected routers: Record<
    string,
    {
      method: string;
      func: (request: Request) => Response;
      middleware?: (req: Request, next: () => Response) => Response;
    }
  > = {};

  get(
    path: string,
    func: (request: Request) => Response,
    middleware?: (req: Request, next: () => Response) => Response,
  ) {
    this.routers[path] = {
      method: "GET",
      func,
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
      middleware,
    };
  }
}
