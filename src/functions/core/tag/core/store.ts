import knex from '../../../../database'
import { Tag } from '../../../../types/tag'

interface TagToInsert extends Omit<Tag, 'tagId'> {}

const create = async (programId: number, categoryId: number) => {
  if (!programId || !categoryId) return ({ code: 'error' })

  const tag: TagToInsert = {
    programId,
    categoryId
  }

  const insert: number | { code: string } = await knex('tag')
    .insert(tag)
    .then((response: Array<number>) => response[0])
    .catch(() => ({ code: 'error' }))

  return insert
}

export default create
