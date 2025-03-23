import { UnauthorizedError } from '../errors';
import type { HttpResponse } from '../protocols';

interface DataInterface {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  body: any
  headers?: Record<string, string>
  cookies?: Record<string, string>
}

export const ok = <T>(data: DataInterface): HttpResponse<T> => ({
  statusCode: 200,
  body: data.body,
  cookies: data.cookies
})

export const created = (data: DataInterface): HttpResponse => ({
  statusCode: 201,
  body: data.body,
  headers: data.headers
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error
})