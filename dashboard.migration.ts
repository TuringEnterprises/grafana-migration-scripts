import fs from 'fs'
import path from 'path'
import { argv } from 'process'


const [file, datasource, uuid] = argv.slice(2)

if(!file || !datasource || !uuid) {
  console.error('You must provide a fle, datasource and a uuid')
  process.exit(1)
}

