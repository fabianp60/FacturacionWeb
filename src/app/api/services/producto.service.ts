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
   * To access only the response body, use `apiProductoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiProductoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoGet(params?: {
    context?: HttpContext
  }
): Observable<any> {

    return this.apiProductoGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
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
): Observable<StrictHttpResponse<any>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
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
): Observable<any> {

    return this.apiProductoPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiProductoIdGet
   */
  static readonly ApiProductoIdGetPath = '/api/Producto/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductoIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductoService.ApiProductoIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiProductoIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductoIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<any> {

    return this.apiProductoIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
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
): Observable<StrictHttpResponse<any>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
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
): Observable<any> {

    return this.apiProductoIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
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
): Observable<StrictHttpResponse<any>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<any>;
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
): Observable<any> {

    return this.apiProductoIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
