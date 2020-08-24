import CsvToJson from "./funcs/csvToJason"

var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

(async function(){
    const firstJson = new CsvToJson()

    // Convert the first .csv file
    // const returnOne = await firstJson.convertToJson(myArgs)
    const [firstObject, secondObject] = await firstJson.convertToJson(myArgs)

    

})();