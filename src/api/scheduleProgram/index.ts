import updateWeekday from './core/updateWeekday'

interface ScheduleProgramProps {
  updateWeekday: (req: any, res: any) => void
}

const scheduleProgram: ScheduleProgramProps = {
  updateWeekday
}

export default scheduleProgram
