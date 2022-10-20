import fs from 'fs'
import path from 'path'
import { argv } from 'process'


const [datasource, uuid] = argv.slice(2)

if(!datasource || !uuid) {
  console.error('You must provide a datasource and a uuid')
  process.exit(1)
}