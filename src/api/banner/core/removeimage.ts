import knex from '../../../database'
import path from 'path'
import fs from 'fs'

export default async function removeimage (req, res) {
  const { bannerId } = req.params

  if (!bannerId) return res.sendStatus(404)

  const banner = (await knex('banner').where({ bannerId }))[0]
  if (!banner) return res.sendStatus(404)

  const { image } = banner

  if (image) {
    try {
      fs.unlinkSync(path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'www', 'storage', 'radio', image.split('radio/')[1]))
      await knex('banner').where({ bannerId }).update({ image: null })
      res.send({ code: 'success' })
    } catch (e) {
      console.log(e)
      return res.send({ code: 'error', message: 'Wasn\'t possible to remove program image from server.' })
    }
  } else {
    res.send({ code: 'error' })
  }
}
