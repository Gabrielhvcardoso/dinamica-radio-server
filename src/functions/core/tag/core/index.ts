import knex from '../../../../database'
import { Tag } from '../../../../types/tag'

const index = async () => {
  return await knex('tag')
    .then((response: Array<Tag>) => {
      return response
    })
}

export default index
