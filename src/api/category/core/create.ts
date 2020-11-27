import functions from '../../../functions'

export default async function create (req, res) {
  const { clientId, name } = req.body

  if (!clientId || !name) res.sendStatus(404)

  const response = await functions.category.store(clientId, name)

  if (typeof (response) !== 'number') {
    return res.send({
      code: 'error',
      message: 'Category couldn\'t be stored.'
    })
  }

  res.send({
    code: 'success',
    categoryId: response
  })
}
