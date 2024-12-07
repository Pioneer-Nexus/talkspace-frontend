import { ApolloProvider } from '@apollo/client'
import { FC, PropsWithChildren } from 'react'
import { client } from './graphql'
export const GraphqlProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
