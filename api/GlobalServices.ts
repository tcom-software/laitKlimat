import { CALL_BACK, GET_CATEGORIES, PROJECT_ID } from "constants/api";

export class GlobalServices {
  static async getCategories() {
    const response = await fetch(GET_CATEGORIES, {
      headers: {
        projectId: PROJECT_ID,
        "Content-Type": "application/json",
      },
    });
    const categories = await response.json();

    return categories;
  }

  static async callBack(body: any) {
    const response = await fetch(CALL_BACK, {
      method: "POST",
      headers: {
        projectId: PROJECT_ID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    return data;
  }
}
