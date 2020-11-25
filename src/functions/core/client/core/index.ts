import knex from '../../../../database'
import { Client } from '../../../../types/client'

const index = async () => {
  return await knex('client')
    .then((response: Array<Client>) => {
      return response
    })
}

export default index
