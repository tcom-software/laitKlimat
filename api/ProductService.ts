import {
  PROJECT_ID,
  GET_PRODUCT,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
} from "constants/api";
import { filterSearchParams } from "helper/filterSearchParams";

export class ProductService {
  static async getProduct(id: string | number) {
    const response = await fetch(`${GET_PRODUCT}/${id}`, {
      headers: { projectId: PROJECT_ID },
    });
    const product = await response.json();

    return product;
  }

  static async getProducts(router: any) {
    const { category, body, page } = filterSearchParams(router);

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

  static async searchProducts(search: string, page: number) {
    const searchData = {
      payload: {} as any,
    };

    try {
      const response = await fetch(`${SEARCH_PRODUCTS}?page=${page || 1}`, {
        method: "POST",
        headers: { projectId: PROJECT_ID, "Content-Type": "application/json" },
        body: JSON.stringify({ search }),
      });
      searchData.payload = await response.json();
    } catch (error) {
      console.log(error);
    }

    return searchData;
  }
}
