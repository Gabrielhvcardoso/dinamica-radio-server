import knex from '../../../../database'

const destroy = async (clientId: number) => {
  if (!clientId) return ({ code: 'error' })

  const destroyed: { code: string } = await knex('client')
    .where({ clientId })
    .del()
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return destroyed
}

export default destroy
