import { GET_SERVICES, PROJECT_ID } from "constants/api";

export class Pages {
  static async getServiceData() {
    const response = await fetch(GET_SERVICES, {
      headers: {
        projectId: PROJECT_ID,
      },
    });
    const services = await response.json();

    return services;
  }
}
