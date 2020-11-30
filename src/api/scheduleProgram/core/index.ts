import knex from '../../../database'

export default async function index (req, res) {
  const schedulePrograms = await knex('scheduleProgram')
    .innerJoin('program', 'scheduleProgram.programId', 'program.programId')
    .select('program.programId', 'weekday', 'startAt', 'duration', 'title', 'image')

  const sunday = schedulePrograms.filter((item) => item.weekday === 1).sort((a, b) => a.startAt > b.startAt ? 1 : -1).map((item, index) => ({ ...item, order: index }))
  const monday = schedulePrograms.filter((item) => item.weekday === 2).sort((a, b) => a.startAt > b.startAt ? 1 : -1).map((item, index) => ({ ...item, order: index }))
  const tuesday = schedulePrograms.filter((item) => item.weekday === 3).sort((a, b) => a.startAt > b.startAt ? 1 : -1).map((item, index) => ({ ...item, order: index }))
  const wednesday = schedulePrograms.filter((item) => item.weekday === 4).sort((a, b) => a.startAt > b.startAt ? 1 : -1).map((item, index) => ({ ...item, order: index }))
  const thursday = schedulePrograms.filter((item) => item.weekday === 5).sort((a, b) => a.startAt > b.startAt ? 1 : -1).map((item, index) => ({ ...item, order: index }))
  const friday = schedulePrograms.filter((item) => item.weekday === 6).sort((a, b) => a.startAt > b.startAt ? 1 : -1).map((item, index) => ({ ...item, order: index }))
  const saturday = schedulePrograms.filter((item) => item.weekday === 7).sort((a, b) => a.startAt > b.startAt ? 1 : -1).map((item, index) => ({ ...item, order: index }))

  res.send({
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
  })
}
