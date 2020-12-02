import knex from '../../../database'
import fs from 'fs'
import path from 'path'

export default async function index (req, res) {
  const { programId } = req.params
  const { title } = req.body

  if (!programId || (!title && !req.file)) return res.sendStatus(404)

  // If received req file property, remove old image and upload new image

  if (req.file) {
    const { path: pathToFile } = req.file
    const program = (await knex('program').where({ programId }).select('image'))[0]

    if (!program) return res.sendStatus(404)

    const { image } = program

    // Remove image from storage

    try {
      fs.unlinkSync(path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'www', 'storage', 'radio', image.split('radio/')[1]))
    } catch (e) {
      console.log(e)
      return res.send({ code: 'error', message: 'Wasn\'t possible to remove program image from server.' })
    }

    // Update image

    const baseURL = 'http://dmihost.com.br/'
    const imageURL = baseURL + pathToFile.substring(pathToFile.indexOf('storage'))
    await knex('program').where({ programId }).update({ image: imageURL })
  }

  // If received title on req.body, update title
  if (title) {
    await knex('program').where({ programId }).update({ title })
  }

  res.send({ code: 'success' })
}
