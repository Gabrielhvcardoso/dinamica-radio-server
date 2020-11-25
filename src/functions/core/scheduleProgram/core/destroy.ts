import knex from '../../../../database'

const destroy = async (scheduleProgramId: number) => {
  if (!scheduleProgramId) return ({ code: 'error' })

  const destroyed: { code: string } = await knex('scheduleProgram')
    .where({ scheduleProgramId })
    .del()
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return destroyed
}

export default destroy
