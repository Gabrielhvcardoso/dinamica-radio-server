import knex from '../../../../database'
import { Program } from '../../../../types/program'

const index = async () => {
  return await knex('program')
    .then((response: Array<Program>) => {
      return response
    })
}

export default index
