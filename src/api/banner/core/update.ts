import knex from '../../../database'
import fs from 'fs'
import path from 'path'

export default async function update (req, res) {
  const { bannerId } = req.params
  const {
    title,
    description,
    targetProgram,
    targetCategory,
    link,
    expiresAt
  } = req.body

  if (!bannerId) return res.sendStatus(404)

  const banner = (await knex('banner').where({ bannerId }))[0]

  if (!banner) return res.sendStatus(404)

  try {
    await knex('banner')
      .where({ bannerId })
      .update({
        title: title || banner.title || null,
        description: description || banner.description || null,
        targetProgram: targetProgram || banner.targetProgram || null,
        targetCategory: targetCategory || banner.targetCategory || null,
        link: link || banner.banner || null,
        expiresAt: expiresAt || banner.expiresAt || null
      })

    if (req.file) {
      const { path: pathToImage } = req.file

      const { image } = banner

      if (image) {
        fs.unlinkSync(path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'www', 'storage', 'radio', image.split('radio/')[1]))
      }

      const baseURL = 'http://dmihost.com.br/'
      const imageURL = baseURL + pathToImage.substring(pathToImage.indexOf('storage'))
      await knex('banner').update({ image: imageURL }).where({ bannerId })

      res.send({ code: 'success' })
    } else {
      res.send({ code: 'success' })
    }
  } catch {
    res.send({ code: 'error' })
  }
}
