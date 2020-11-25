import knex from '../../../../database'

const destroy = async (categoryId: number) => {
  if (!categoryId) return ({ code: 'error' })

  const destroyed: { code: string } = await knex('category')
    .where({ categoryId })
    .del()
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return destroyed
}

export default destroy
