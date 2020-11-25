import knex from '../../../../database'

const destroy = async (userId: number) => {
  if (!userId) return ({ code: 'error' })

  const destroyed: { code: string } = await knex('user')
    .where({ userId })
    .del()
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return destroyed
}

export default destroy
