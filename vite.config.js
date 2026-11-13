import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  base: '/grid_layout/',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}