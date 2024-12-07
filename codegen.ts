import type { CodegenConfig } from '@graphql-codegen/cli'
import { appConfig } from './src/configs'

const config: CodegenConfig = {
  schema: appConfig.graphApiUrl,
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql/': {
      preset: 'client',
    },
  },
}

export default config
