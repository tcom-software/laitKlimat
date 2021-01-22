export const getProductImageX300 = (data: any) => {
  const {
    product_picture_folder,
    product_picture_file_name,
    product_picture_format,
    cover_photo,
  } = data;

  let productImageX300PathName: string;
  if (product_picture_folder) {
    productImageX300PathName = `products/${product_picture_folder}/size300/${product_picture_file_name}.${product_picture_format}`;
  } else {
    const coverPhoto = JSON.parse(cover_photo);
    const photo = coverPhoto.find(({ cover_photo }: any) => cover_photo === 1);

    if (photo) {
      const {
        series_picture_file_name,
        series_picture_folder,
        series_picture_format,
      } = photo;
      productImageX300PathName = `product_series/${series_picture_folder}/size300/${series_picture_file_name}.${series_picture_format}`;
    } else {
      productImageX300PathName = "";
    }
  }

  return productImageX300PathName;
};
