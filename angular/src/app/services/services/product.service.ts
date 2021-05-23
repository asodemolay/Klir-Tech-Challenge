/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
class ProductService extends __BaseService {
  static readonly getApiProductPath = '/api/Product';
  static readonly getApiProductIdPath = '/api/Product/{id}';
  static readonly getApiProductNameNamePath = '/api/Product/name={name}';
  static readonly postApiProductIdAddPromotionPath = '/api/Product/{id}/AddPromotion';
  static readonly deleteApiProductIdRemovePromotionPath = '/api/Product/{id}/RemovePromotion';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiProductResponse(): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Product`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Product>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiProduct(): __Observable<Array<Product>> {
    return this.getApiProductResponse().pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getApiProductIdResponse(id: number): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Product/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getApiProductId(id: number): __Observable<Product> {
    return this.getApiProductIdResponse(id).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * @param name undefined
   * @return Success
   */
  getApiProductNameNameResponse(name: string): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Product/name=${encodeURIComponent(String(name))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Product>>;
      })
    );
  }
  /**
   * @param name undefined
   * @return Success
   */
  getApiProductNameName(name: string): __Observable<Array<Product>> {
    return this.getApiProductNameNameResponse(name).pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }

  /**
   * @param params The `ProductService.PostApiProductIdAddPromotionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `promotionType`:
   *
   * @return Success
   */
  postApiProductIdAddPromotionResponse(params: ProductService.PostApiProductIdAddPromotionParams): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.promotionType != null) __params = __params.set('promotionType', params.promotionType.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Product/${encodeURIComponent(String(params.id))}/AddPromotion`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * @param params The `ProductService.PostApiProductIdAddPromotionParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `promotionType`:
   *
   * @return Success
   */
  postApiProductIdAddPromotion(params: ProductService.PostApiProductIdAddPromotionParams): __Observable<Product> {
    return this.postApiProductIdAddPromotionResponse(params).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  deleteApiProductIdRemovePromotionResponse(id: number): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Product/${encodeURIComponent(String(id))}/RemovePromotion`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  deleteApiProductIdRemovePromotion(id: number): __Observable<Product> {
    return this.deleteApiProductIdRemovePromotionResponse(id).pipe(
      __map(_r => _r.body as Product)
    );
  }
}

module ProductService {

  /**
   * Parameters for postApiProductIdAddPromotion
   */
  export interface PostApiProductIdAddPromotionParams {
    id: number;
    promotionType?: any;
  }
}

export { ProductService }
