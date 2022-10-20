import fs from 'fs'
import path from 'path'
import { argv } from 'process'


const [file, datasource, uuid] = argv.slice(2)

if(!file || !datasource || !uuid) {
  console.error('You must provide a fle, datasource and a uuid')
  process.exit(1)
}

try{

const filePath = path.resolve(file)

const fileContent = fs.readFileSync(filePath, 'utf-8')

const parsedJSON = JSON.parse(fileContent)

if(!parsedJSON.panels) {
    console.error('Provided file is not a valid dashboard')
    process.exit()
}

parsedJSON.panels.forEach((panel: any) => {
    panel.datasource.type = datasource
    panel.datasource.uid = uuid 
})


fs.writeFileSync(filePath,JSON.stringify(parsedJSON),{encoding:'utf8',flag:'w'})

console.log('Successfully updated datasource')

} catch(e: any){
    console.error(e.message)
}

