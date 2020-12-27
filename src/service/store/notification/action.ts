export const NotificationType = { NEW_NOTIFICATION: "NEW_NOTIFICATION" };
export const NotificationAction = {
  loadNews: (count: number) => {
    return {
      type: NotificationType.NEW_NOTIFICATION,
      payload: { count: count },
    };
  },
};
