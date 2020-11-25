import knex from '../../../../database'

const destroy = async (bannerId: number) => {
  if (!bannerId) return ({ code: 'error' })

  const destroyed: { code: string } = await knex('banner')
    .where({ bannerId })
    .del()
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return destroyed
}

export default destroy
