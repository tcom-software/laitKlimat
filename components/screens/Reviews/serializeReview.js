export const serializeReview = (data) => {
  const serializeData = [];
  const { reviewImages, reviews } = data;

  for (const {
    id,
    date,
    comment,
    advantages,
    limitations,
    admin_comment,
    installed_conditioner,
    last_name,
    name,
    rating,
  } of reviews) {
    const images = reviewImages
      .filter((el) => el.review_id === id)
      .map(({ file_format, file_name, folder, review_id }) => ({
        path: `http://projects-backend.ru/public/${folder}${file_name}`,
        format: file_format,
      }));

    const serializeReview = {
      id,
      date,
      comment,
      advantages,
      limitations,
      admin_comment,
      installed_conditioner,
      last_name,
      name,
      rating,
      images,
    };

    serializeData.push(serializeReview);
  }

  return serializeData;
};

// reviewImages: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// reviews: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// total:

///****************************** review data */

//// admin_comment: "Администратор сайта лайт климат здравствуйте, test testtest. Спасибо вам за отзыв, всегда готовы вам помочь."
//// advantages: "FGJHGFGJ"
//// comment: null
// created_at: null
//// date: "2020-12-10"
//// id: 10
//// installed_conditioner: null
//// last_name: "testtest"
// limitations: null
//// name: "test"
// project_id: 59
// rating: 5
// updated_at: null

///****************************** review image data */

// file_format: "png"
// file_name: "ec1c94e01f26cdf41574e8f2d5a54898"
// folder: "uploads/reviews/lk/"
// review_id: 6
