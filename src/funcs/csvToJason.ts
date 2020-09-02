import csv from 'csvtojson'
// import csvToJson from 'convert-csv-to-json'
let csvToJson = require('convert-csv-to-json')
import path from "path";

class CsvToJson {

    public async convertToJson (filePaths: string[]) {

        const csvFilePathFirst = path.join(__dirname, '../', filePaths[0])
        const csvFilePathSecond = path.join(__dirname, '../', filePaths[1])
        
        console.log(csvFilePathFirst)
        console.log(csvFilePathSecond)

        // const jsonArrayOne = await csv().fromFile(csvFilePathFirst)
        const jsonArrayOne = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePathFirst)
        delete jsonArrayOne[0]

        // const jsonArrayTwo = await csv().fromFile(csvFilePathSecond)
        const jsonArrayTwo = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFilePathSecond)
        delete jsonArrayTwo[0]
        
        jsonArrayOne.shift()
        jsonArrayTwo.shift()

        const Results = [jsonArrayOne, jsonArrayTwo]

        return Results
    }
}

export default CsvToJson