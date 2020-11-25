import knex from '../../../../database'
import { User } from '../../../../types/user'

const find = async (where: {}) => {
  if (!where) return ({ code: 'error' })

  const found: Array<User> = await knex('user').where(where)
  return found
}

export default find
