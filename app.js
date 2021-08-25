const express = require('express');
const {upload} = require('./file-upload.js');
const {total, saleDate} = require('./excel-to-json.js');

const app = express();

//middleware that serves the static index.html file and whatever else is on that public folder
app.use(express.static('public'));

//route for POSTING the uploaded file to the server
app.post('/upload', upload.single('avatar'), (req, res) => {
    return res.json({ status: 'OK' });
})

console.log(`Total sale for ${saleDate} is ${total} USD`);

//running server
app.listen(3000, () => console.log('App is listening...'));

