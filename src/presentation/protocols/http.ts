export interface HttpResponse <B = any> {
  statusCode: number,
  body: B,
  cookies?: any,
  headers?: any
};

interface Content {
  body?: any,
  cookies?: any,
  query?: any,
  headers?: any,
  params?: any
};

export type HttpRequest <T = Content> = T;