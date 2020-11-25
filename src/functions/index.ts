import { Client } from '../types/client'
import client from './core/client'

interface Functions {
  client: {
    read: () => Promise<Array<Client>>
  }
}

const functions: Functions = {
  client
}

export default functions
