import functions from '../../../functions'

export default async function destroy (req, res) {
  const { bannerId } = req.params
  if (!bannerId) return res.sendStatus(404)
  const response = await functions.banner.destroy(bannerId)
  res.send({ code: response.code })
}
