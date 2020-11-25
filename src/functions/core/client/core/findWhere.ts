import knex from '../../../../database'
import { Client } from '../../../../types/client'

const find = async (where: {}) => {
  if (!where) return ({ code: 'error' })

  const found: Array<Client> = await knex('client').where(where)
  return found
}

export default find
