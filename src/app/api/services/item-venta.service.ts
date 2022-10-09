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

import { ItemVenta } from '../models/item-venta';

@Injectable({
  providedIn: 'root',
})
export class ItemVentaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiItemVentaGet
   */
  static readonly ApiItemVentaGetPath = '/api/ItemVenta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemVentaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemVenta>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemVentaService.ApiItemVentaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemVenta>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemVentaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemVenta>> {

    return this.apiItemVentaGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemVenta>>) => r.body as Array<ItemVenta>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemVentaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemVenta>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemVentaService.ApiItemVentaGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemVenta>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemVentaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemVenta>> {

    return this.apiItemVentaGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemVenta>>) => r.body as Array<ItemVenta>)
    );
  }

  /**
   * Path part for operation apiItemVentaPost
   */
  static readonly ApiItemVentaPostPath = '/api/ItemVenta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemVentaPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemVentaPost$Response(params?: {
    context?: HttpContext
    body?: ItemVenta
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ItemVentaService.ApiItemVentaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiItemVentaPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemVentaPost(params?: {
    context?: HttpContext
    body?: ItemVenta
  }
): Observable<void> {

    return this.apiItemVentaPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiItemVentaIdGet
   */
  static readonly ApiItemVentaIdGetPath = '/api/ItemVenta/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemVentaIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ItemVenta>> {

    const rb = new RequestBuilder(this.rootUrl, ItemVentaService.ApiItemVentaIdGetPath, 'get');
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
        return r as StrictHttpResponse<ItemVenta>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemVentaIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<ItemVenta> {

    return this.apiItemVentaIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemVenta>) => r.body as ItemVenta)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemVentaIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ItemVenta>> {

    const rb = new RequestBuilder(this.rootUrl, ItemVentaService.ApiItemVentaIdGetPath, 'get');
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
        return r as StrictHttpResponse<ItemVenta>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiItemVentaIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<ItemVenta> {

    return this.apiItemVentaIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemVenta>) => r.body as ItemVenta)
    );
  }

  /**
   * Path part for operation apiItemVentaIdPut
   */
  static readonly ApiItemVentaIdPutPath = '/api/ItemVenta/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemVentaIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemVentaIdPut$Response(params: {
    id: number;
    context?: HttpContext
    body?: ItemVenta
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ItemVentaService.ApiItemVentaIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiItemVentaIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemVentaIdPut(params: {
    id: number;
    context?: HttpContext
    body?: ItemVenta
  }
): Observable<void> {

    return this.apiItemVentaIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiItemVentaIdDelete
   */
  static readonly ApiItemVentaIdDeletePath = '/api/ItemVenta/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemVentaIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ItemVentaService.ApiItemVentaIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiItemVentaIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiItemVentaIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
