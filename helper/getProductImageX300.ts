export const getProductImageX300 = (data: any) => {
  const {
    product_picture_folder,
    product_picture_file_name,
    product_picture_format,

    series_picture_folder,
    series_picture_file_name,
    series_picture_format,
  } = data;

  const productImageX300PathName = product_picture_folder
    ? `products/${product_picture_folder}/size300/${product_picture_file_name}.${product_picture_format}`
    : `product_series/${series_picture_folder}/size300/${series_picture_file_name}.${series_picture_format}`;

  return productImageX300PathName;
};
