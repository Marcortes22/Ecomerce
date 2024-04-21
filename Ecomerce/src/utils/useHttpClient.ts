import { ContentType } from "../types/content-type.enum";
import { HttpMethod } from "../types/http-method.enum";
import { BaseRequestOptions, RequestOptions } from "../types/request-options.interface";

export const KEY_CONTENT_TYPE: string = 'Content-Type';

async function fetchRequest<T>(options: RequestOptions): Promise<T> {
  const {
    errorMessage,
    headers = { [KEY_CONTENT_TYPE]: ContentType.JSON },
    method,
    body = null,
    url,
  } = options;

  const optionsFetch: RequestInit = {
    method,
    headers,
  };

  if ([HttpMethod.POST, HttpMethod.PUT].includes(method)) {
    optionsFetch.body = (headers[KEY_CONTENT_TYPE] === ContentType.JSON)
      ? JSON.stringify(body) 
      : body as RequestInit['body'];
  }

  const response = await fetch(url, optionsFetch);

  if (!response.ok) {
    throw new Error(errorMessage || `HTTP error! Status: ${response.status}`);
  }

  switch (headers[KEY_CONTENT_TYPE]) {
    case ContentType.JSON: return response.json() as Promise<T>;
    case ContentType.Text || ContentType.Html: return response.text() as unknown as Promise<T>;
    case ContentType.ArrayBuffer: return response.arrayBuffer() as unknown as Promise<T>;
    default: return response.blob() as unknown as Promise<T>;
  }
}

export function get<T>(options: BaseRequestOptions) {
  return fetchRequest<T>({ method: HttpMethod.GET, ...options });
}

export function post<T>(
  options: BaseRequestOptions & Required<Pick<RequestOptions, 'body'>>
) {
  return fetchRequest<T>({ method: HttpMethod.POST, ...options });
}

export function put<T>(
  options: BaseRequestOptions & Required<Pick<RequestOptions, 'body'>>
) {
  return fetchRequest<T>({ method: HttpMethod.PUT, ...options });
}

export function remove<T>(options: BaseRequestOptions) {
  return fetchRequest<T>({ method: HttpMethod.DELETE, ...options });
}
