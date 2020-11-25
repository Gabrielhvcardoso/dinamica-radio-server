import knex from '../../../../database'

interface ProgramToUpdate {
  title?: string,
  image?: string
}

const update = async (programId: number, title?: string | null, image?: string | null) => {
  if (!programId || !title || !image) return ({ code: 'error' })

  const program: ProgramToUpdate = {
    ...(() => title && image ? ({ title, image }) : title && !image ? ({ title }) : ({ image }))()
  }

  const updating: { code: string } = await knex('program')
    .update(program)
    .where({ programId })
    .then(() => ({ code: 'sucess' }))
    .catch(() => ({ code: 'error' }))

  return updating
}

export default update
