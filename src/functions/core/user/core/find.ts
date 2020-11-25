import knex from '../../../../database'
import { User } from '../../../../types/user'

const find = async (userId: number) => {
  if (!userId) return ({ code: 'error' })

  const found: Array<User> = await knex('user').where({ userId })
  return found
}

export default find
