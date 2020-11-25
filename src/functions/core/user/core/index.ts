import knex from '../../../../database'
import { User } from '../../../../types/user'

const index = async () => {
  return await knex('user')
    .then((response: Array<User>) => {
      return response
    })
}

export default index
