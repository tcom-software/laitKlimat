import { GET_PRODUCTS, PROJECT_ID } from "constants/api";
import { filterSearchParams } from "helper/filterSearchParams";
import {
  serializeFiltersData,
  serializeManufacturerCountries,
} from "./functions";

export class FilterService {
  static async getFilters(router: any) {
    const { category, body, page } = filterSearchParams(router);
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

  // static async getFiltersByFilter(router: any) {
  //   const { category, body } = filterSearchParams(router);
  //   const response = await fetch(`${GET_FILTERS}/${category}`, {
  //     method: "POST",
  //     headers: {
  //       projectId: "59",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });

  //   const data = await response.json();

  //   const {
  //     textFilters,
  //     manufacturerCountries,
  //     characteristicAttributes,
  //   } = data;

  //   const serializedFiltersData = serializeFiltersData(
  //     characteristicAttributes
  //   );

  //   const serializedManufacturerCountries = serializeManufacturerCountries(
  //     manufacturerCountries
  //   );

  //   return {
  //     textFilters,
  //     data: serializedFiltersData,
  //     manufacturerCountries: serializedManufacturerCountries,
  //   };
  // }
}
