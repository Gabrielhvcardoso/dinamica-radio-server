import knex from '../../../../database'
import { Category } from '../../../../types/category'

const find = async (categoryId: number) => {
  if (!categoryId) return ({ code: 'error' })

  const found: Array<Category> = await knex('category').where({ categoryId })
  return found
}

export default find
