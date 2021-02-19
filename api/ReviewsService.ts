import { GET_REVIEWS, ADD_REVIEW, PROJECT_ID } from "constants/api";

export class ReviewsService {
  static async getReviews(page: number | string) {
    const response = await fetch(`${GET_REVIEWS}?page=${page || 1}`, {
      headers: { projectId: PROJECT_ID },
    });
    const reviews = await response.json();

    return reviews;
  }

  static async addReview(review: FormData) {
    const response = await fetch(ADD_REVIEW, {
      method: "POST",
      headers: {
        projectId: PROJECT_ID,
      },
      body: review,
    });
    const data = await response.json();

    return data;
  }
}
