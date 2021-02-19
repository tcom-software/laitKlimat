import { ORDER, PROJECT_ID } from "constants/api";

export class BasketService {
  static async doOrder(body: any) {
    const response = await fetch(ORDER, {
      method: "POST",
      headers: { projectId: PROJECT_ID, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return data;
  }
}
