const express = require('express');
const path = require('path');

const app = express();

const publicDirectory = path.join(__dirname, './public');
// console.log(__dirname);
// console.log(publicDirectory);
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

// app.get("/", (req, res) => {
//     res.render('index');
// })

// app.get("/about", (req, res) => {
//     res.send("About us");
// })

app.use('/', require('./routes/pages'));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})