import { Expose } from "class-transformer";

export class NotificationGetList {
  @Expose()
  notification_id: number | undefined;
  @Expose()
  notification_context: string | undefined;
  @Expose()
  notification_creat_at: Date | undefined;
  @Expose()
  notification_posterId: number | undefined;
  @Expose()
  notification_userCreateId: number | undefined;
  @Expose()
  userCreate_name: string | undefined;
  @Expose()
  isSeen: boolean | undefined;
}
