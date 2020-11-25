import knex from '../../../../database'
import { Banner } from '../../../../types/banner'

const find = async (where: {}) => {
  if (!where) return ({ code: 'error' })

  const found: Array<Banner> = await knex('banner').where(where)
  return found
}

export default find
