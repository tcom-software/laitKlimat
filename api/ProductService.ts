import {
  PROJECT_ID,
  GET_PRODUCT,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
} from "constants/api";
import { filterSearchParams } from "helper/filterSearchParams";
import { serializeSearchResult } from "helper/serializeSearchResult";

export class ProductService {
  static async getProduct(id: string | number) {
    const response = await fetch(`${GET_PRODUCT}/${id}`, {
      headers: { projectId: PROJECT_ID },
    });
    const product = await response.json();

    return product;
  }

  static async getProducts(router: any, noFilter: boolean = false) {
    const { category, body, page } = noFilter
      ? router
      : filterSearchParams(router);

    const searchParams = `${category}?page=${page || 1}`;
    const response = await fetch(`${GET_PRODUCTS}/${searchParams}`, {
      method: "POST",
      headers: { projectId: PROJECT_ID, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const {
      filters,
      products: _products,
      products_info: { characteristics, ...restInfo },
    } = await response.json();

    for (const characteristic of characteristics) {
      const product = _products.find(({ id }: any) => id === characteristic.id);
      product.characteristics = characteristic;
    }

    return { products: _products, products_info: restInfo, filters };
  }

  static async searchProducts({
    body = {},
    page = 1,
    noSerialize = false,
  }: {
    body: any;
    page: any;
    noSerialize?: boolean;
  }) {
    const searchPayload: any = {
      total: null,
      products: null,
    };

    try {
      const response = await fetch(`${SEARCH_PRODUCTS}?page=${page}`, {
        method: "POST",
        headers: { projectId: PROJECT_ID, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const { total, searchResponse } = await response.json();
      const products = noSerialize
        ? searchResponse
        : serializeSearchResult(searchResponse);
      searchPayload.total = total;
      searchPayload.products = products;
    } catch (error) {
      console.log(`some error in searchProducts -> `, error);
    }

    return searchPayload;
  }
}
