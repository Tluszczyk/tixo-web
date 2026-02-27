import { tablesDB } from "@/api/appwriteClient";
import type { Notification } from "@/api/dto/Notification";
import { HandleAppwriteErrors } from "@/api/utils/decorators";
import { Query } from "appwrite";

class NotificationsService {
  @HandleAppwriteErrors({}, [])
  async listNotifications(): Promise<Notification[]> {
    const rowList = await tablesDB.listRows<Notification>({
      databaseId: "tixo",
      tableId: "in-app-notifications",
      queries: [
        Query.orderDesc("$createdAt"),
        Query.limit(10)
      ]
    });
    return rowList.rows;
  }
}

export const notifications = new NotificationsService();
