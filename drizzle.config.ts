import type { Config } from 'drizzle-kit'
import { env } from './src/env'

export default {
  schema: './src/drizze/schema/*',
  out: './src/drizze/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
} satisfies Config
