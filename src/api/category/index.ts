import create from './core/create'
import index from './core'

interface CategoryProps {
  create: (req: any, res: any) => void,
  index: (req: any, res: any) => void,
}

const category: CategoryProps = {
  create,
  index
}

export default category
