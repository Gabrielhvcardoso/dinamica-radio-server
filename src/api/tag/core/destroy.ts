import functions from '../../../functions'

export default async function destroy (req, res) {
  const { tagId } = req.params

  if (!tagId) return res.sendStatus(404)

  const response = await functions.tag.destroy(tagId)

  if (response.code === 'success') {
    return res.send({ code: 'success' })
  }

  res.send({ code: 'error' })
}
