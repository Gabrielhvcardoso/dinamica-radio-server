import functions from '../../../functions'

export default async function create (req, res) {
  const { clientId, title } = req.file

  if (!clientId || !title || !req.file) return res.sendStatus(404)

  const { path } = req.file

  const baseURL = 'http://dmihost.com.br/'
  const imageURL = baseURL + path.substring(path.indexOf('storage'))

  const response = await functions.program.store(clientId, title, imageURL)

  if (typeof (response) !== 'number') {
    return res.send({
      code: 'error'
    })
  }

  res.send({
    code: 'successs',
    programId: response
  })
}
