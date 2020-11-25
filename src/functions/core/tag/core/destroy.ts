import knex from '../../../../database'

const destroy = async (tagId: number) => {
  if (!tagId) return ({ code: 'error' })

  const destroyed: { code: string } = await knex('tag')
    .where({ tagId })
    .del()
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return destroyed
}

export default destroy
