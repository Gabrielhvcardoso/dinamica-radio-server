import create from './core/create'
import index from './core'

interface ProgramProps {
  create: (req: any, res: any) => void,
  index: (req: any, res: any) => void
}

const program: ProgramProps = {
  create,
  index
}

export default program
