import { config as conf } from 'dotenv'
import { PrismaClient } from '../../src/generated/client'
const prisma = new PrismaClient()
conf()

interface Config {
  port: number | string
  prisma: PrismaClient
  bcryptSecret: string | undefined
  jwtToken: string | undefined
}

const config: Config = {
  port: process.env.PORT ?? 3000,
  prisma,
  bcryptSecret: process.env.BCRYPT_SECRET,
  jwtToken: process.env.JWT_SECRET
}

export default config
