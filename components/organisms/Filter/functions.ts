import { UPLOADS_URL } from "constants/api";

/**
 * serialize Filters Data, split by parts
 */
export const serializeFiltersData = (data: any) => {
  const serializedData: any = {};
  for (let i = 0; i < data.length; i++) {
    const {
      title,
      id: sortId,
      name: type,
      name_ru: label,
      characteristic_id: id,
    } = data[i];
    if (!id) continue;
    if (!serializedData[id]) {
      serializedData[id] = { id, title, type, values: [] };
    }
    serializedData[id].values.push({ label, value: sortId });
  }
  return serializedData;
};

/**
 * serialize Manufacturer Countries
 */
export const serializeManufacturerCountries = (manufacturerCountries: any) => {
  const serializedData: any = manufacturerCountries.map(
    ({ logo, count, brand, id }: any) => ({
      count,
      value: id,
      label: brand,
      image: `${UPLOADS_URL}/manufacturer_logo/size150/${logo}`,
    })
  );
  return serializedData;
};
