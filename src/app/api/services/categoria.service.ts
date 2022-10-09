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

import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCategoriaGet
   */
  static readonly ApiCategoriaGetPath = '/api/Categoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Categoria>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriaService.ApiCategoriaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Categoria>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoriaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<Categoria>> {

    return this.apiCategoriaGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Categoria>>) => r.body as Array<Categoria>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Categoria>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriaService.ApiCategoriaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Categoria>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoriaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<Categoria>> {

    return this.apiCategoriaGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Categoria>>) => r.body as Array<Categoria>)
    );
  }

  /**
   * Path part for operation apiCategoriaPost
   */
  static readonly ApiCategoriaPostPath = '/api/Categoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriaPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriaPost$Response(params?: {
    context?: HttpContext
    body?: Categoria
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriaService.ApiCategoriaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCategoriaPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriaPost(params?: {
    context?: HttpContext
    body?: Categoria
  }
): Observable<void> {

    return this.apiCategoriaPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCategoriaIdGet
   */
  static readonly ApiCategoriaIdGetPath = '/api/Categoria/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriaIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Categoria>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriaService.ApiCategoriaIdGetPath, 'get');
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
        return r as StrictHttpResponse<Categoria>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoriaIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Categoria> {

    return this.apiCategoriaIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Categoria>) => r.body as Categoria)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriaIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Categoria>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriaService.ApiCategoriaIdGetPath, 'get');
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
        return r as StrictHttpResponse<Categoria>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoriaIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Categoria> {

    return this.apiCategoriaIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Categoria>) => r.body as Categoria)
    );
  }

  /**
   * Path part for operation apiCategoriaIdPut
   */
  static readonly ApiCategoriaIdPutPath = '/api/Categoria/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriaIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriaIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: Categoria
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriaService.ApiCategoriaIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCategoriaIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoriaIdPut(params: {
    id: number;
    context?: HttpContext
    body?: Categoria
  }
): Observable<void> {

    return this.apiCategoriaIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCategoriaIdDelete
   */
  static readonly ApiCategoriaIdDeletePath = '/api/Categoria/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoriaIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriaService.ApiCategoriaIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCategoriaIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoriaIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiCategoriaIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
