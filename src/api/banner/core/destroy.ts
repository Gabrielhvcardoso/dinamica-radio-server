import knex from '../../../database'
import functions from '../../../functions'
import path from 'path'
import fs from 'fs'

export default async function destroy (req, res) {
  const { bannerId } = req.params
  if (!bannerId) return res.sendStatus(404)

  const banner = (await knex('banner').where({ bannerId }))[0]
  if (!banner) return res.sendStatus(404)

  const { image } = banner

  if (image) {
    try {
      fs.unlinkSync(path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'www', 'storage', 'radio', image.split('radio/')[1]))
    } catch (e) {
      console.log(e)
      return res.send({ code: 'error', message: 'Wasn\'t possible to remove program image from server.' })
    }
  }

  const response = await functions.banner.destroy(bannerId)
  res.send({ code: response.code })
}
