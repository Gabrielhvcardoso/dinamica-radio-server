import knex from '../../../../database'
import { Client } from '../../../../types/client'

const find = async (clientId: number) => {
  if (!clientId) return ({ code: 'error' })

  const found: Array<Client> = await knex('client').where({ clientId })
  return found
}

export default find
