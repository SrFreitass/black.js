export interface BlackRequest extends Request {
  params: {
    [key: string]: string;
  };
}

export type paramsMethod = (
  path: string,
  func: (request: BlackRequest) => Response,
  middleware?: ((req: Request, next: () => Response) => Response) | undefined,
) => void;

export type RouterParam = {
  delete: paramsMethod;
  get: paramsMethod;
  post: paramsMethod;
  patch: paramsMethod;
  put: paramsMethod;
};