import { appConfig } from '@/configs'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: appConfig.graphApiUrl,
  cache: new InMemoryCache(),
})
