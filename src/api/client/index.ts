import login from './core/login'

interface ClientProps {
  login: (req: any, res: any) => void
}

const client: ClientProps = {
  login
}

export default client
