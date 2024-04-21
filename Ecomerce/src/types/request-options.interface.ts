import { HttpMethod } from "./http-method.enum";

export interface RequestOptions {
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: RequestInit['body'] | Record<string, unknown>;
  errorMessage?: string;
  url: string;
}

export type BaseRequestOptions = Omit<RequestOptions, 'method' | 'body'>;
