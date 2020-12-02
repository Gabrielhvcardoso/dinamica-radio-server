import create from './core/create'
import destroy from './core/destroy'
import index from './core'
import update from './core/update'

interface ProgramProps {
  create: (req: any, res: any) => void,
  destroy: (req: any, res: any) => void,
  index: (req: any, res: any) => void,
  update: (req: any, res: any) => void
}

const program: ProgramProps = {
  create,
  destroy,
  index,
  update
}

export default program
