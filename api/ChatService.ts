import { CHAT_FEEDBACK, PROJECT_ID } from "constants/api";

export class ChatService {
  static async chatFeedBack(body: any) {
    const response = await fetch(CHAT_FEEDBACK, {
      method: "POST",
      headers: { projectId: PROJECT_ID, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    return data;
  }
}
