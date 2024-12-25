import { appConfig } from '@/configs'
import { AuthService } from '@/services'
import { LOCAL_STORAGE } from '@/utils'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: appConfig.graphApiUrl,
})

const authLink = setContext((_, { headers }) => {
  const token = AuthService.instance.getAccessToken(LOCAL_STORAGE.ACCESS_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})
