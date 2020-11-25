import knex from '../../../../database'
import { ScheduleProgram } from '../../../../types/scheduleProgram'

const find = async (where: {}) => {
  if (!where) return ({ code: 'error' })

  const found: Array<ScheduleProgram> = await knex('scheduleProgram').where(where)
  return found
}

export default find
