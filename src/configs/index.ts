interface AppConfig {
  title: string
  restApiUrl: string
  graphApiUrl: string
}

const config: AppConfig = {
  title: 'Chat Space',
  restApiUrl: import.meta.env.VITE_API_URL || '',
  graphApiUrl: import.meta.env.VITE_GRAPH_API_URL || '',
}

export const appConfig = config
