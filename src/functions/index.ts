import { Banner } from '../types/banner'
import { Client } from '../types/client'
import { Program } from '../types/program'
import { User } from '../types/user'

import banner from './core/banner'
import client from './core/client'
import program from './core/program'
import user from './core/user'

type Response = { code: string }

interface Functions {
  banner: {
    index: () => Promise<Array<Banner>>,
    find: (bannerId: number) => Promise<Array<Banner> | Response>,
    store: (
      clientId: number,
      title: string,
      description?: string | null,
      image?: string | null,
      link?: string | null,
      targetProgram?: number | null,
      targetCategory?: number | null,
      expiresAt?: number | null
    ) => Promise<number | Response>,
    update: (
      bannerId: number,
      title?: string | null,
      description?: string | null,
      image?: string | null,
      link?: string | null,
      targetProgram?: number | null,
      targetCategory?: number | null,
      expiresAt?: number | null
    ) => Promise<Response>,
    destroy: (bannerId: number) => Promise<Response>
  },
  client: {
    index: () => Promise<Array<Client>>,
    find: (clientId: number) => Promise<Array<Client> | Response>,
    store: (mail: string, password: string) => Promise<number | Response>,
    update: (clientId: number, mail: string | null, password: string | null) => Promise<Response>,
    destroy: (clientId: number) => Promise<Response>
  },
  program: {
    index: () => Promise<Array<Program>>,
    find: (programId: number) => Promise<Array<Program> | Response>,
    store: (clientId: number, title: string, image: string) => Promise<number | Response>,
    update: (programId: number, title?: string | null, image?: string | null) => Promise<Response>,
    destroy: (programId: number) => Promise<Response>
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
  banner,
  client,
  program,
  user
}

export default functions
