import knex from '../../../../database'
import { Program } from '../../../../types/program'

interface ProgramToInsert extends Omit<Program, 'programId'> {}

const create = async (clientId: number, title: string, image: string) => {
  if (!clientId || !title || !image) return ({ code: 'error' })

  const program: ProgramToInsert = {
    clientId,
    title,
    image
  }

  const insert: number | { code: string } = await knex('program')
    .insert(program)
    .then((response: Array<number>) => response[0])
    .catch(() => ({ code: 'error' }))

  return insert
}

export default create
