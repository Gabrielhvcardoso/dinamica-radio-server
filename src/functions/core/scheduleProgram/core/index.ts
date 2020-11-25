import knex from '../../../../database'
import { ScheduleProgram } from '../../../../types/scheduleProgram'

const index = async () => {
  return await knex('scheduleProgram')
    .then((response: Array<ScheduleProgram>) => {
      return response
    })
}

export default index
