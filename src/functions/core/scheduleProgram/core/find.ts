import knex from '../../../../database'
import { ScheduleProgram } from '../../../../types/scheduleProgram'

const find = async (scheduleProgramId: number) => {
  if (!scheduleProgramId) return ({ code: 'error' })

  const found: Array<ScheduleProgram> = await knex('scheduleProgram').where({ scheduleProgramId })
  return found
}

export default find
