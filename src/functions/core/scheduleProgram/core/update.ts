import knex from '../../../../database'

interface ScheduleProgramToUpdate {
  startAt?: string,
  duration?: number
}

const update = async (scheduleProgramId: number, startAt?: string | null, duration?: number | null) => {
  if (!scheduleProgramId || (!startAt && !duration)) return ({ code: 'error' })

  const scheduleProgram: ScheduleProgramToUpdate = {
    ...(() => startAt && duration ? ({ startAt, duration }) : startAt && !duration ? ({ startAt }) : ({ duration }))()
  }

  const updating: { code: string } = await knex('scheduleProgram')
    .update(scheduleProgram)
    .where({ scheduleProgramId })
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return updating
}

export default update
