import { GET_PRODUCTS, GET_BRANDS, PROJECT_ID } from "constants/api";
import {
  serializeFiltersData,
  serializeManufacturerCountries,
} from "./functions";

export class FilterService {
  static async getFilters({ category, body, page }: any) {
    const searchParams = `${category}?page=${page || 1}`;
    const response = await fetch(`${GET_PRODUCTS}/${searchParams}`, {
      method: "POST",
      headers: {
        projectId: PROJECT_ID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    const {
      filters: { textFilters, manufacturerCountries, characteristicAttributes },
    } = data;

    const serializedFiltersData = serializeFiltersData(
      characteristicAttributes
    );

    const serializedManufacturerCountries = serializeManufacturerCountries(
      manufacturerCountries
    );

    return {
      textFilters,
      characteristicAttributes: serializedFiltersData,
      manufacturerCountries: serializedManufacturerCountries,
    };
  }

  // TODO::: don't exist in back end
  static async getBrands() {
    const response = await fetch(`${GET_BRANDS}`, {
      headers: {
        projectId: PROJECT_ID,
      },
    });

    return await response.json();
  }
}
