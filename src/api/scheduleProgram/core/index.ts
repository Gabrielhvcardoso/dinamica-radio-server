import knex from '../../../database'

function resolveWeekday (intWeekday: number) {
  switch (intWeekday) {
    case 1: return 'sunday'
    case 2: return 'monday'
    case 3: return 'tuesday'
    case 4: return 'wednesday'
    case 5: return 'thursday'
    case 6: return 'friday'
    default: return 'saturday'
  }
}

export default async function index (req, res) {
  const schedulePrograms = await knex('scheduleProgram')
    .innerJoin('program', 'scheduleProgram.programId', 'program.programId')
    .select('program.programId', 'weekday', 'startAt', 'duration', 'title', 'image')

  const reduced = schedulePrograms.reduce((acc, item) => {
    const weekday = resolveWeekday(item.programId)
    acc[weekday].push(item)

    return acc
  }, {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
  })

  res.send(reduced)
}
