import knex from '../../../../database'
import { Program } from '../../../../types/program'

const find = async (where: {}) => {
  if (!where) return ({ code: 'error' })

  const found: Array<Program> = await knex('program').where(where)
  return found
}

export default find
