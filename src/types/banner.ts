export interface Banner {
  bannerId: number,
  clientId: number, // ref: client
  title: string,
  createdAt: number,

  description?: string,
  image?: string,
  link?: string,
  targetProgram?: number, // ref: program
  targetCategory?: number, // ref: category
  expiresAt?: number
}
