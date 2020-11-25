import knex from '../../../../database'
import { Tag } from '../../../../types/tag'

const find = async (tagId: number) => {
  if (!tagId) return ({ code: 'error' })

  const found: Array<Tag> = await knex('tag').where({ tagId })
  return found
}

export default find
