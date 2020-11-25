import knex from '../../../../database'
import { Client } from '../../../../types/client'

const read = async () => {
  return await knex('client')
    .then((response: Array<Client>) => {
      return response
    })
}

export default read
