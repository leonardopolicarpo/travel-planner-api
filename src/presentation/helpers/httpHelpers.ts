import { UnauthorizedError } from '../errors';
import type { HttpResponse } from '../protocols';

export const ok = <T>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data
})

interface CreatedInterface {
  body: any
  headers?: Record<string, string>
}

export const created = (data: CreatedInterface): HttpResponse => ({
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