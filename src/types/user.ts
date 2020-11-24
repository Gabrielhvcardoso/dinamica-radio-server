export interface User {
  userId: number,
  clientId: number, // ref: client
  notificationToken: string,
  platform: string
}
