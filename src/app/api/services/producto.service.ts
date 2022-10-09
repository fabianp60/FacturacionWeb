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

import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProductoGet
   */
  static readonly ApiProductoGetPath = '/api/Producto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Producto>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Producto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Producto>> {

    return this.apiProductoGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Producto>>) => r.body as Array<Producto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Producto>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Producto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Producto>> {

    return this.apiProductoGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Producto>>) => r.body as Array<Producto>)
    );
  }

  /**
   * Path part for operation apiProductoPost
   */
  static readonly ApiProductoPostPath = '/api/Producto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductoPost$Response(params?: {
    context?: HttpContext
    body?: Producto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoPostPath, 'post');
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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductoPost(params?: {
    context?: HttpContext
    body?: Producto
  }
): Observable<void> {

    return this.apiProductoPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiProductoIdGet
   */
  static readonly ApiProductoIdGetPath = '/api/Producto/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Producto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Producto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Producto> {

    return this.apiProductoIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Producto>) => r.body as Producto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Producto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Producto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Producto> {

    return this.apiProductoIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Producto>) => r.body as Producto)
    );
  }

  /**
   * Path part for operation apiProductoIdPut
   */
  static readonly ApiProductoIdPutPath = '/api/Producto/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductoIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: Producto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoIdPutPath, 'put');
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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductoIdPut(params: {
    id: number;
    context?: HttpContext
    body?: Producto
  }
): Observable<void> {

    return this.apiProductoIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiProductoIdDelete
   */
  static readonly ApiProductoIdDeletePath = '/api/Producto/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoIdDeletePath, 'delete');
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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductoIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiProductoIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
