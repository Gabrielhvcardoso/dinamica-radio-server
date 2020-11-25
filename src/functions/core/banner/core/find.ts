import knex from '../../../../database'
import { Banner } from '../../../../types/banner'

const find = async (bannerId: number) => {
  if (!bannerId) return ({ code: 'error' })

  const found: Array<Banner> = await knex('banner').where({ bannerId })
  return found
}

export default find
