interface AppConfig {
  title: string
  restApiUrl: string
  graphApiUrl: string
}

export const appConfig: AppConfig = {
  title: 'Chat Space',
  restApiUrl: import.meta.env.VITE_API_URL || '',
  graphApiUrl: import.meta.env.VITE_GRAPH_API_URL || 'http://localhost:9000/graphql',
}
