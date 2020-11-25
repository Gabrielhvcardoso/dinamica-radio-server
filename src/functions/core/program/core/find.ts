import knex from '../../../../database'
import { Program } from '../../../../types/program'

const find = async (programId: number) => {
  if (!programId) return ({ code: 'error' })

  const found: Array<Program> = await knex('program').where({ programId })
  return found
}

export default find
