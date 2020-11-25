import knex from '../../../../database'
import { User } from '../../../../types/user'

interface UserToInsert extends Omit<User, 'userId'> {}

const create = async (clientId: number, notificationToken: string, platform: string) => {
  if (!clientId || !notificationToken || !platform) return ({ code: 'error' })

  const user: UserToInsert = {
    clientId,
    notificationToken,
    platform
  }

  const insert: number | { code: string } = await knex('user')
    .insert(user)
    .then((response: Array<number>) => response[0])
    .catch(() => ({ code: 'error' }))

  return insert
}

export default create
