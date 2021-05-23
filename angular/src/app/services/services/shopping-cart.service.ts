/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ShoppingCart } from '../models/shopping-cart';
@Injectable({
  providedIn: 'root',
})
class ShoppingCartService extends __BaseService {
  static readonly getApiShoppingCartPath = '/api/ShoppingCart';
  static readonly postApiShoppingCartProductIdSetquantityQuantityPath = '/api/ShoppingCart/{productId}/setquantity/{quantity}';
  static readonly deleteApiShoppingCartProductIdPath = '/api/ShoppingCart/{productId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiShoppingCartResponse(): __Observable<__StrictHttpResponse<ShoppingCart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ShoppingCart`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShoppingCart>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiShoppingCart(): __Observable<ShoppingCart> {
    return this.getApiShoppingCartResponse().pipe(
      __map(_r => _r.body as ShoppingCart)
    );
  }

  /**
   * @param params The `ShoppingCartService.PostApiShoppingCartProductIdSetquantityQuantityParams` containing the following parameters:
   *
   * - `quantity`:
   *
   * - `productId`:
   *
   * @return Success
   */
  postApiShoppingCartProductIdSetquantityQuantityResponse(params: ShoppingCartService.PostApiShoppingCartProductIdSetquantityQuantityParams): __Observable<__StrictHttpResponse<ShoppingCart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/ShoppingCart/${encodeURIComponent(String(params.productId))}/setquantity/${encodeURIComponent(String(params.quantity))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShoppingCart>;
      })
    );
  }
  /**
   * @param params The `ShoppingCartService.PostApiShoppingCartProductIdSetquantityQuantityParams` containing the following parameters:
   *
   * - `quantity`:
   *
   * - `productId`:
   *
   * @return Success
   */
  postApiShoppingCartProductIdSetquantityQuantity(params: ShoppingCartService.PostApiShoppingCartProductIdSetquantityQuantityParams): __Observable<ShoppingCart> {
    return this.postApiShoppingCartProductIdSetquantityQuantityResponse(params).pipe(
      __map(_r => _r.body as ShoppingCart)
    );
  }

  /**
   * @param productId undefined
   * @return Success
   */
  deleteApiShoppingCartProductIdResponse(productId: number): __Observable<__StrictHttpResponse<ShoppingCart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/ShoppingCart/${encodeURIComponent(String(productId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShoppingCart>;
      })
    );
  }
  /**
   * @param productId undefined
   * @return Success
   */
  deleteApiShoppingCartProductId(productId: number): __Observable<ShoppingCart> {
    return this.deleteApiShoppingCartProductIdResponse(productId).pipe(
      __map(_r => _r.body as ShoppingCart)
    );
  }
}

module ShoppingCartService {

  /**
   * Parameters for postApiShoppingCartProductIdSetquantityQuantity
   */
  export interface PostApiShoppingCartProductIdSetquantityQuantityParams {
    quantity: number;
    productId: number;
  }
}

export { ShoppingCartService }
