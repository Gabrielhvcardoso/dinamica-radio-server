import create from './core/create'
import destroy from './core/destroy'
import index from './core'

interface CategoryProps {
  create: (req: any, res: any) => void,
  destroy: (req: any, res: any) => void,
  index: (req: any, res: any) => void,
}

const category: CategoryProps = {
  create,
  destroy,
  index
}

export default category
