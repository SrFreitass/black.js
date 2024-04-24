import type { BlackRequest, RouteType, RouterParam } from "../@type/type";
import { setParams } from "./setParams";

export class BlackRouter {
  protected routers: RouteType = {};

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
    func: (request: BlackRequest) => Promise<Response> | Response,
    middleware?: (
      req: BlackRequest,
      next: () => Promise<Response> | Response,
    ) => Promise<Response> | Response,
  ) {
    const params = setParams(path);

    this.routers[params?.pathname || path] = {
      method: "GET",
      func,
      searchParams: params || null,
      middleware,
    };
  }

  post(
    path: string,
    func: (request: BlackRequest) => Promise<Response> | Response,
    middleware?: (
      req: BlackRequest,
      next: () => Promise<Response> | Response,
    ) => Promise<Response> | Response,
  ) {
    const params = setParams(path);

    this.routers[params?.pathname || path] = {
      method: "POST",
      func,
      middleware,
    };
  }

  patch(
    path: string,
    func: (request: BlackRequest) => Promise<Response> | Response,
    middleware?: (
      req: BlackRequest,
      next: () => Promise<Response> | Response,
    ) => Promise<Response> | Response,
  ) {
    const params = setParams(path);

    this.routers[params?.pathname || path] = {
      method: "PATCH",
      func,
      middleware,
    };
  }

  put(
    path: string,
    func: (request: BlackRequest) => Promise<Response> | Response,
    middleware?: (
      req: BlackRequest,
      next: () => Promise<Response> | Response,
    ) => Promise<Response> | Response,
  ) {
    const params = setParams(path);

    this.routers[params?.pathname || path] = {
      method: "PUT",
      func,
      middleware,
    };
  }

  delete(
    path: string,
    func: (request: BlackRequest) => Promise<Response> | Response,
    middleware?: (
      req: BlackRequest,
      next: () => Promise<Response> | Response,
    ) => Promise<Response> | Response,
  ) {
    const params = setParams(path);

    this.routers[params?.pathname || path] = {
      method: "DELETE",
      func,
      middleware,
    };
  }
}
