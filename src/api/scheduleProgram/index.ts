import index from './core'
import updateWeekday from './core/updateWeekday'

interface ScheduleProgramProps {
  index: (req: any, res: any) => void,
  updateWeekday: (req: any, res: any) => void
}

const scheduleProgram: ScheduleProgramProps = {
  index,
  updateWeekday
}

export default scheduleProgram
