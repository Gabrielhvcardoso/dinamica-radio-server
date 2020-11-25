import index from './core'

interface CategoryProps {
  index: (req: any, res: any) => void
}

const category: CategoryProps = {
  index
}

export default category
