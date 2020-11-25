import knex from '../../../../database'
import { Client } from '../../../../types/client'

interface ClientToInsert extends Omit<Client, 'clientId'> {}

const create = async (mail: string, password: string) => {
  if (!mail || !password) return ({ code: 'error' })

  const now = new Date().getTime()

  const client: ClientToInsert = {
    mail,
    password,
    createdAt: now,
    updatedAt: now
  }

  const insert: number | { code: string } = await knex('client')
    .insert(client)
    .then((response: Array<number>) => response[0])
    .catch(() => ({ code: 'error' }))

  return insert
}

export default create
