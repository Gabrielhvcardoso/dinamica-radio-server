import knex from '../../../../database'
import { Banner } from '../../../../types/banner'

const index = async () => {
  return await knex('banner')
    .then((response: Array<Banner>) => {
      return response
    })
}

export default index
