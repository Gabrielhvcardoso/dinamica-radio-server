import { Client } from '../types/client'
import { User } from '../types/user'

import client from './core/client'
import user from './core/user'

type Response = { code: string }

interface Functions {
  client: {
    index: () => Promise<Array<Client>>,
    find: (clientId: number) => Promise<Array<Client> | Response>,
    store: (mail: string, password: string) => Promise<number | Response>,
    update: (clientId: number, mail: string | null, password: string | null) => Promise<Response>,
    destroy: (clientId: number) => Promise<Response>
  },
  user: {
    index: () => Promise<Array<User>>,
    find: (userId: number) => Promise<Array<User> | Response>,
    store: (clientId: number, notificationToken: string, platform: string) => Promise<number | Response>,
    update: (userId: number, notificationToken: string | null, platform: string | null) => Promise<Response>,
    destroy: (userId: number) => Promise<Response>
  }
}

const functions: Functions = {
  client,
  user
}

export default functions
