import knex from '../../../../database'
import { Category } from '../../../../types/category'

const index = async () => {
  return await knex('category')
    .then((response: Array<Category>) => {
      return response
    })
}

export default index
