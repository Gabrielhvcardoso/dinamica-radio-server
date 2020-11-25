import index from './core'

interface ProgramProps {
  index: (req: any, res: any) => void
}

const program: ProgramProps = {
  index
}

export default program
