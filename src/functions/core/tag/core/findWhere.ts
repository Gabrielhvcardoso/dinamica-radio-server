import knex from '../../../../database'
import { Tag } from '../../../../types/tag'

const find = async (where: {}) => {
  if (!where) return ({ code: 'error' })

  const found: Array<Tag> = await knex('tag').where(where)
  return found
}

export default find
