export const serializeReview = data => {
  const serializeData = [];
  const { reviewImages, reviews } = data;

  for (const {
    id,
    date,
    name,
    rating,
    comment,
    last_name,
    advantages,
    limitations,
    admin_comment,
    installed_conditioner,
  } of reviews) {
    const images = reviewImages
      .filter(el => el.review_id === id)
      .map(({ file_format, file_name, folder, review_id }) => ({
        path: `${process.env.NEXT_PUBLIC_API_UPLOADS_URL}/${folder}${file_name}.${file_format}`,
      }));

    const serializeReview = {
      id,
      date,
      name,
      images,
      rating,
      comment,
      last_name,
      advantages,
      limitations,
      admin_comment,
      installed_conditioner,
    };

    serializeData.push(serializeReview);
  }

  return serializeData;
};
