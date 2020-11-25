import knex from '../../../../database'
import { Client } from '../../../../types/client'

interface ClientToUpdate extends Omit<Omit<Omit<Omit<Client, 'createdAt'>, 'clientId'>, 'mail'>, 'password'> {
  mail?: string,
  password?: string
}

const update = async (clientId: number, mail: string | null, password: string | null) => {
  if (!mail && !password) return ({ code: 'error' })

  const now = new Date().getTime()

  const client: ClientToUpdate = {
    ...(() => mail && password ? ({ mail, password }) : mail && !password ? ({ mail }) : ({ password }))(),
    updatedAt: now
  }

  const updating: { code: string } = await knex('client')
    .update(client)
    .where({ clientId })
    .then(() => ({ code: 'success' }))
    .catch(() => ({ code: 'error' }))

  return updating
}

export default update
