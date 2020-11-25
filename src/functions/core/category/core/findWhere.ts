import knex from '../../../../database'
import { Category } from '../../../../types/category'

const find = async (where: {}) => {
  if (!where) return ({ code: 'error' })

  const found: Array<Category> = await knex('category').where(where)
  return found
}

export default find
