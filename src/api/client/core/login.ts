import functions from '../../../functions'

export default async function index (req, res) {
  const { mail, password } = req.body

  const response = functions.client.findWhere({ mail, password })

  if (!response[0]) {
    return res.send({
      code: 'error',
      message: 'Any register has been found using these credentials.'
    })
  }

  res.send({
    code: 'success',
    clientId: response[0].clientId
  })
}
