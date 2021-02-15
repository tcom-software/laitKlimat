import { GET_FILTERS } from "constants/api";
import { filterSearchParams } from "helper/filterSearchParams";
import {
  serializeFiltersData,
  serializeManufacturerCountries,
} from "./functions";

export class FilterService {
  static async getFilters(categoryId: any) {
    const response = await fetch(`${GET_FILTERS}/${categoryId}`, {
      headers: {
        projectId: "59",
      },
    });

    const data = await response.json();

    const {
      textFilters,
      manufacturerCountries,
      characteristicAttributes,
    } = data;

    const serializedFiltersData = serializeFiltersData(
      characteristicAttributes
    );

    const serializedManufacturerCountries = serializeManufacturerCountries(
      manufacturerCountries
    );

    return {
      categoryId,
      textFilters,
      characteristicAttributes: serializedFiltersData,
      manufacturerCountries: serializedManufacturerCountries,
    };
  }

  static async getFiltersByFilter(router: any) {
    const { category, body } = filterSearchParams(router);
    const response = await fetch(`${GET_FILTERS}/${category}`, {
      method: "POST",
      headers: {
        projectId: "59",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    const {
      textFilters,
      manufacturerCountries,
      characteristicAttributes,
    } = data;

    const serializedFiltersData = serializeFiltersData(
      characteristicAttributes
    );

    const serializedManufacturerCountries = serializeManufacturerCountries(
      manufacturerCountries
    );

    return {
      textFilters,
      data: serializedFiltersData,
      manufacturerCountries: serializedManufacturerCountries,
    };
  }
}
