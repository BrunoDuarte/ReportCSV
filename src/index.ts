import CsvToJson from "./funcs/csvToJason"
import processReport from './funcs/processReport'

var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

(async function(){
    
    const firstJson = new CsvToJson()
    const [firstObject, secondObject] = await firstJson.convertToJson(myArgs)
    // tablesResult = JSON.stringify(tablesResult)

    const newProcess = new processReport()
    const result = newProcess.create(firstObject, secondObject)

})();

// devops oversight