import knex from '../../../../database'
import { Banner } from '../../../../types/banner'

interface BannerToInsert extends Omit<Banner, 'bannerId'> {}

const create = async (
  clientId: number,
  title: string,

  description?: string | null,
  image?: string | null,
  link?: string | null,
  targetProgram?: number | null,
  targetCategory?: number | null,
  expiresAt?: number | null
) => {
  if (!clientId || !title) return ({ code: 'error' })

  const now = new Date().getTime()

  const banner: BannerToInsert = {
    clientId,
    title,
    createdAt: now,
    description,
    image,
    link,
    targetProgram,
    targetCategory,
    expiresAt
  }

  const insert: number | { code: string } = await knex('banner')
    .insert(banner)
    .then((response: Array<number>) => response[0])
    .catch(() => ({ code: 'error' }))

  return insert
}

export default create
