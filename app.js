const express = require('express');
const {upload} = require('./file-upload.js');
const {update} = require('./excel-to-json.js');

const app = express();

//middleware that serves the static index.html file and whatever else is on that public folder
app.use(express.static('public'));

//route for POSTING the uploaded file to the server
app.post('/upload', upload.single('avatar'), (req, res) => {
    res.json({ status: 'OK' });
    return update();
})

//running server
app.listen(3000, () => console.log('App is listening...'));

