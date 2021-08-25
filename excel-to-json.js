const dirTree = require("directory-tree");

const xlsx = require('xlsx');

const fs = require('fs')


const tree = dirTree('./uploads');
const files = tree.children;
const fileNamesArray = [];
for(const file of files) {
    if(file.extension == ".xls") {
        fileNamesArray.push(file.name);
    };
};
console.log(fileNamesArray);

const update = () => {
    
    
    if(fileNamesArray.length != 0 ) {
    
        //Here we call one of the files for testing
        const wb = xlsx.readFile(`./uploads/${fileNamesArray[0]}`);
        
        
        //Here we call the first sheet (we ain't sure about first sheet's name)
        const firstSheetName = wb.SheetNames[0];
        const ws = wb.Sheets[firstSheetName];
    
        
        //this xlsx.utils.sheet_to_json will ransform each row into a JSON object
        const sales = xlsx.utils.sheet_to_json(ws);
        
        //Here we hardcode a dummy date, we will assign this later through the front
        const saleDate = "octubre";
        
        //We add the date to each row
        for(const sale of sales) {
            Object.assign(sale, {date: saleDate});
        };
    
        console.log(sales[1]);
        const path = `./uploads/${fileNamesArray[0]}`
    
  
            fs.unlinkSync(path)
        
    
    } else {
        console.log('All your files have been processed');
    }
    
};    


const deleteFile = () => {
    if(fileNamesArray.length !== 0 ){
    const path = `./uploads/${fileNamesArray[0]}`
    
        try {
            fs.unlinkSync(path)
            //file removed
        } catch(err) {
            console.error(err)
        }
} else { 
    console.log("nothing to clear")
}
}

 module.exports = {
    update,
    deleteFile
}