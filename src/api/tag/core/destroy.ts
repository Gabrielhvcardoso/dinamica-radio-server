import functions from '../../../functions'

export default async function destroy (req, res) {
  const { programId, categoryId } = req.params

  if (!programId || !categoryId) return res.sendStatus(404)

  const response = await functions.tag.findWhere({ programId, categoryId })

  if (!response[0]) {
    return res.send({ code: 'error' })
  }

  const deleted = await functions.tag.destroy(response[0])

  if (deleted.code === 'success') {
    return res.send({ code: 'success' })
  }

  res.send({ code: 'error' })
}
