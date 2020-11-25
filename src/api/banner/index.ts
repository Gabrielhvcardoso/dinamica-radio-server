import index from './core'

interface BannerProps {
  index: (req: any, res: any) => void
}

const banner: BannerProps = {
  index
}

export default banner
