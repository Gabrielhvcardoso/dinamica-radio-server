import knex from '../../../database'

export default async function create (req, res) {
  const { programId, categoryId } = req.body

  if (!programId || !categoryId) return res.sendStatus(404)

  const creating: { code: string, id?: number } = await knex('tag')
    .insert({ programId, categoryId })
    .then((response: Array<number>) => ({ code: 'success', id: response[0] }))
    .catch(() => ({ code: 'error' }))

  res.send(creating)
}
