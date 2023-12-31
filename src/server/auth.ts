import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import VKProvider from 'next-auth/providers/vk'

const AUTHORIZED_REDIRECT_PAGE = '/feed'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    VKProvider({
      clientId: process.env.VK_CLIENT_ID!,
      clientSecret: process.env.VK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    redirect: async () => {
      return AUTHORIZED_REDIRECT_PAGE
    },
  },
}
