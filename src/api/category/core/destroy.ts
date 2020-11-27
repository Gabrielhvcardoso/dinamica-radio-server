import knex from '../../../database'
import functions from '../../../functions'

export default async function create (req, res) {
  const { categoryId } = req.params

  if (!categoryId) return res.sendStatus(404)

  knex('banner')
    .where({ targetCategory: categoryId })
    .update({ targetCategory: null })
    .then(() => {
      knex('tag')
        .where({ categoryId })
        .del()
        .then(async () => {
          const response = await functions.category.destroy(categoryId)

          if (response.code === 'success') {
            res.send({ code: 'success' })
          } else {
            res.send({ code: 'error' })
          }
        })
    })
}
