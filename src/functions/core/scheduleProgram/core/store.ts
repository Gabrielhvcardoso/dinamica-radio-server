import knex from '../../../../database'
import { ScheduleProgram } from '../../../../types/scheduleProgram'

interface ScheduleProgramToInsert extends Omit<ScheduleProgram, 'scheduleProgramId'> {}

const create = async (
  programId: number,
  weekday: 1 | 2 | 3 | 4 | 5 | 6 | 7,
  startAt: string,
  duration: number
) => {
  if (!programId || !weekday || !startAt || !duration) return ({ code: 'error' })

  const scheduleProgram: ScheduleProgramToInsert = {
    programId,
    weekday,
    startAt,
    duration
  }

  const insert: number | { code: string } = await knex('scheduleProgram')
    .insert(scheduleProgram)
    .then((response: Array<number>) => response[0])
    .catch(() => ({ code: 'error' }))

  return insert
}

export default create
