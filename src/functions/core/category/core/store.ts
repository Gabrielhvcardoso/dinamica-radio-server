import knex from '../../../../database'
import { Category } from '../../../../types/category'

interface CategoryToInsert extends Omit<Category, 'categoryId'> {}

const create = async (clientId: number, name: string) => {
  if (!clientId || !name) return ({ code: 'error' })

  const category: CategoryToInsert = {
    clientId,
    name
  }

  const insert: number | { code: string } = await knex('category')
    .insert(category)
    .then((response: Array<number>) => response[0])
    .catch(() => ({ code: 'error' }))

  return insert
}

export default create
