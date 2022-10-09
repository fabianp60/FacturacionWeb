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

import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root',
})
export class FacturaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiFacturaGet
   */
  static readonly ApiFacturaGetPath = '/api/Factura';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFacturaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFacturaGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FacturaService.ApiFacturaGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiFacturaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFacturaGet(params?: {
    context?: HttpContext
  }
): Observable<any> {

    return this.apiFacturaGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiFacturaPost
   */
  static readonly ApiFacturaPostPath = '/api/Factura';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFacturaPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFacturaPost$Response(params?: {
    context?: HttpContext
    body?: Factura
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FacturaService.ApiFacturaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiFacturaPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFacturaPost(params?: {
    context?: HttpContext
    body?: Factura
  }
): Observable<any> {

    return this.apiFacturaPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiFacturaNumfacturaGet
   */
  static readonly ApiFacturaNumfacturaGetPath = '/api/Factura/{numfactura}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFacturaNumfacturaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFacturaNumfacturaGet$Response(params: {
    numfactura: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FacturaService.ApiFacturaNumfacturaGetPath, 'get');
    if (params) {
      rb.path('numfactura', params.numfactura, {});
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
   * To access the full response (for headers, for example), `apiFacturaNumfacturaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFacturaNumfacturaGet(params: {
    numfactura: number;
    context?: HttpContext
  }
): Observable<any> {

    return this.apiFacturaNumfacturaGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiFacturaNumfacturaPut
   */
  static readonly ApiFacturaNumfacturaPutPath = '/api/Factura/{numfactura}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFacturaNumfacturaPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFacturaNumfacturaPut$Response(params: {
    numfactura: number;
    context?: HttpContext
    body?: Factura
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FacturaService.ApiFacturaNumfacturaPutPath, 'put');
    if (params) {
      rb.path('numfactura', params.numfactura, {});
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
   * To access the full response (for headers, for example), `apiFacturaNumfacturaPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFacturaNumfacturaPut(params: {
    numfactura: number;
    context?: HttpContext
    body?: Factura
  }
): Observable<any> {

    return this.apiFacturaNumfacturaPut$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation apiFacturaNumfacturaDelete
   */
  static readonly ApiFacturaNumfacturaDeletePath = '/api/Factura/{numfactura}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFacturaNumfacturaDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFacturaNumfacturaDelete$Response(params: {
    numfactura: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, FacturaService.ApiFacturaNumfacturaDeletePath, 'delete');
    if (params) {
      rb.path('numfactura', params.numfactura, {});
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
   * To access the full response (for headers, for example), `apiFacturaNumfacturaDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFacturaNumfacturaDelete(params: {
    numfactura: number;
    context?: HttpContext
  }
): Observable<any> {

    return this.apiFacturaNumfacturaDelete$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
