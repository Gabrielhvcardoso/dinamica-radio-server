import { Banner } from '../types/banner'
import { Category } from '../types/category'
import { Client } from '../types/client'
import { Program } from '../types/program'
import { ScheduleProgram } from '../types/scheduleProgram'
import { User } from '../types/user'

import banner from './core/banner'
import category from './core/category'
import client from './core/client'
import program from './core/program'
import scheduleProgram from './core/scheduleProgram'
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
  category: {
    index: () => Promise<Array<Category>>,
    find: (programId: number) => Promise<Array<Category> | Response>,
    store: (clientId: number, name: string) => Promise<number | Response>,
    update: (programId: number, name: string) => Promise<Response>,
    destroy: (programId: number) => Promise<Response>
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
  scheduleProgram: {
    index: () => Promise<Array<ScheduleProgram>>,
    find: (scheduleProgramId: number) => Promise<Array<ScheduleProgram> | Response>,
    store: (programId: number, weekday: 1 | 2 | 3 | 4 | 5 | 6 | 7, startAt: string, duration: number) => Promise<number | Response>,
    update: (scheduleProgramId: number, startAt?: string | null, duration?: number | null) => Promise<Response>,
    destroy: (scheduleProgramId: number) => Promise<Response>,
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
  category,
  client,
  program,
  scheduleProgram,
  user
}

export default functions
