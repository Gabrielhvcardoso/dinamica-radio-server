import { Client } from '../types/client'
import client from './core/client'

type Response = { code: string }

interface Functions {
  client: {
    index: () => Promise<Array<Client>>,
    find: (clientId: number) => Promise<Array<Client> | Response>,
    store: (mail: string, password: string) => Promise<number | Response>,
    update: (clientId: number, mail: string, password: string) => Promise<Response>,
    destroy: (clientId: number) => Promise<Response>
  }
}

const functions: Functions = {
  client
}

export default functions
