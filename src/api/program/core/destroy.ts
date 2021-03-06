import knex from '../../../database'
import fs from 'fs'
import path from 'path'

export default async function destroy (req, res) {
  const { programId } = req.params

  if (!programId) return res.sendStatus(404)

  const program = (await knex('program').where({ programId }).select('image'))[0]
  if (!program) return res.sendStatus(404)

  const { image } = program

  try {
    fs.unlinkSync(path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'www', 'storage', 'radio', image.split('radio/')[1]))
  } catch (e) {
    console.log(e)
    return res.send({ code: 'error', message: 'Wasn\'t possible to remove program image from server.' })
  }

  knex('scheduleProgram')
    .where({ programId })
    .del()
    .then(() => {
      knex('banner')
        .where({ targetProgram: programId })
        .update({ targetProgram: null })
        .then(() => {
          knex('tag')
            .where({ programId })
            .del()
            .then(() => {
              knex('program')
                .where({ programId })
                .del()
                .then(() => res.send({ code: 'success' }))
                .catch(() => res.send({ code: 'error', assignment: 4 }))
            })
            .catch(() => res.send({ code: 'error', assignment: 3 }))
        })
        .catch(() => res.send({ code: 'error', assignment: 2 }))
    })
    .catch(() => res.send({ code: 'error', assignment: 1 }))
}
