export interface HttpResponse <B = any> {
  statusCode: number,
  body: B
};

interface Content {
  body?: any,
  query?: any,
  headers?: any,
  params?: any
};

export type HttpRequest <T = Content> = T;