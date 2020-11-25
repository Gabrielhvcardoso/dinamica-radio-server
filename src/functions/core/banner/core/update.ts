import knex from '../../../../database'
import { Banner } from '../../../../types/banner'

interface BannerToInsert extends Omit<Omit<Omit<Banner, 'bannerId'>, 'clientId'>, 'createdAt'> {}

const create = async (
  bannerId: number,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  link?: string | null,
  targetProgram?: number | null,
  targetCategory?: number | null,
  expiresAt?: number | null
) => {
  if (!bannerId) return ({ code: 'error' })
  if (!title && !description && !image && !link && !targetProgram && !targetCategory && !expiresAt) return ({ code: 'error' })

  const banner: BannerToInsert = {
    ...(() => {
      const obj = {
        title,
        description,
        image,
        link,
        targetProgram,
        targetCategory,
        expiresAt
      }

      Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key])
      return obj
    })()
  }

  const updating: { code: string } = await knex('banner')
    .update(banner)
    .where({ bannerId })
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return updating
}

export default create
