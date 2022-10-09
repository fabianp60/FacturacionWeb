/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiClienteGet
   */
  static readonly ApiClienteGetPath = '/api/Cliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ApiClienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClienteGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet(params?: {
    context?: HttpContext
  }
): Observable<any> {

    return this.apiClienteGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiClientePost
   */
  static readonly ApiClientePostPath = '/api/Cliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost$Response(params?: {
    context?: HttpContext
    body?: Cliente
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ApiClientePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClientePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost(params?: {
    context?: HttpContext
    body?: Cliente
  }
): Observable<any> {

    return this.apiClientePost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiClienteIdGet
   */
  static readonly ApiClienteIdGetPath = '/api/Cliente/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ApiClienteIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClienteIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<any> {

    return this.apiClienteIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiClienteIdPut
   */
  static readonly ApiClienteIdPutPath = '/api/Cliente/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClienteIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: Cliente
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ApiClienteIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClienteIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClienteIdPut(params: {
    id: number;
    context?: HttpContext
    body?: Cliente
  }
): Observable<any> {

    return this.apiClienteIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiClienteIdDelete
   */
  static readonly ApiClienteIdDeletePath = '/api/Cliente/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ApiClienteIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClienteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<any> {

    return this.apiClienteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
