import knex from '../../../database'

export default async function create (req, res) {
  const {
    title,
    description,
    targetProgram,
    targetCategory,
    link,
    expiresAt
  } = req.body

  if (!title) return res.sendStatus(404)

  const bannerId = (await knex('banner')
    .insert({
      title,
      description: description || null,
      targetProgram: targetProgram || null,
      targetCategory: targetCategory || null,
      link: link || null,
      expiresAt: expiresAt || null,
      createdAt: new Date().getTime().toString()
    }))[0]

  if (req.file) {
    const { path } = req.file

    const baseURL = 'http://dmihost.com.br/'
    const imageURL = baseURL + path.substring(path.indexOf('storage'))

    await knex('banner').update({ image: imageURL }).where({ bannerId })
  }

  res.send({ code: 'success', bannerId })
}
