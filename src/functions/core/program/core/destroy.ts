import knex from '../../../../database'

const destroy = async (programId: number) => {
  if (!programId) return ({ code: 'error' })

  const destroyed: { code: string } = await knex('program')
    .where({ programId })
    .del()
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return destroyed
}

export default destroy
