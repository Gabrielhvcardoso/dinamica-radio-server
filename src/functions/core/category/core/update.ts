import knex from '../../../../database'

interface CategoryToUpdate {
  name?: string
}

const update = async (categoryId: number, name: string) => {
  if (!categoryId || !name) return ({ code: 'error' })

  const category: CategoryToUpdate = {
    name
  }

  const updating: { code: string } = await knex('category')
    .update(category)
    .where({ categoryId })
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return updating
}

export default update
