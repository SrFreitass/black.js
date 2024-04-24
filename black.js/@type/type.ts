export interface BlackRequest extends Request {
  params: {
    [key: string]: string;
  };
}

export type paramsMethod = (
  path: string,
  func: (request: BlackRequest) => Promise<Response> | Response,
  middleware?: (
    req: BlackRequest,
    next: () => Promise<Response> | Response,
  ) => Promise<Response> | Response,
) => void;

export type RouterParam = {
  delete: paramsMethod;
  get: paramsMethod;
  post: paramsMethod;
  patch: paramsMethod;
  put: paramsMethod;
};

export type RouteType = Record<
  string,
  {
    method: string;
    func: (request: BlackRequest) => Promise<Response> | Response;
    middleware?: (
      req: BlackRequest,
      next: () => Promise<Response> | Response,
    ) => Promise<Response> | Response;
    searchParams?: {
      params: string;
      pathname: string;
    } | null;
  }
>;
