import knex from '../../../database'

export default async function index (req, res) {
  const { clientId } = req.body

  if (!clientId) return res.sendStatus(404)

  const response = await knex('category').where({ clientId }).select('categoryId', 'name')
  res.send(response)
}
