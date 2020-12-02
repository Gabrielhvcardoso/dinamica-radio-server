import create from './core/create'
import index from './core'
import update from './core/update'

interface BannerProps {
  create: (req: any, res: any) => void,
  index: (req: any, res: any) => void,
  update: (req: any, res: any) => void
}

const banner: BannerProps = {
  create,
  index,
  update
}

export default banner
