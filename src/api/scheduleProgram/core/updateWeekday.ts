import knex from '../../../database'

interface Request {
  body: {
    clientId: number,
    weekday: 1 | 2 | 3 | 4 | 5 | 6 | 7,
    programs: [
      {
        programId: number,
        startAt: number,
        duration: number
      }
    ]
  }
}

export default async function updateWeekday (req: Request, res) {
  const { clientId, weekday, programs } = req.body

  if (!clientId || !weekday || !programs) return res.sendStatus(404)

  knex('scheduleProgram')
    .del()
    .where({ clientId, weekday })
    .then(() => {
      const programsToInsert = programs.map(({ programId, startAt, duration }) => ({
        programId,
        weekday,
        startAt,
        duration
      }))

      knex('scheduleProgram')
        .insert(programsToInsert)
        .then(() => res.send({ code: 'success' }))
        .catch(() => res.send({ code: 'error' }))
    })
}
