import create from './core/create'
import destroy from './core/destroy'

interface TagProps {
  create: (req: any, res: any) => void,
  destroy: (req: any, res: any) => void,
}

const tag: TagProps = {
  create,
  destroy
}

export default tag
