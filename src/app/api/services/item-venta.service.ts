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
   * To access only the response body, use `apiItemVentaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ItemVentaService.ApiItemVentaGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiItemVentaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaGet(params?: {
    context?: HttpContext
  }
): Observable<any> {

    return this.apiItemVentaGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
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
): Observable<StrictHttpResponse<any>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
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
): Observable<any> {

    return this.apiItemVentaPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiItemVentaIdGet
   */
  static readonly ApiItemVentaIdGetPath = '/api/ItemVenta/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemVentaIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ItemVentaService.ApiItemVentaIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiItemVentaIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemVentaIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<any> {

    return this.apiItemVentaIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
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
): Observable<StrictHttpResponse<any>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
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
): Observable<any> {

    return this.apiItemVentaIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
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
): Observable<StrictHttpResponse<any>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
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
): Observable<any> {

    return this.apiItemVentaIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
