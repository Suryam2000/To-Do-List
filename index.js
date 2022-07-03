const express = require('express');
const port = 8000;

const app = express();

app.use('/', require('./routes'));

app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());

app.listen(port, function(err){
    if(err){console.log(`Error in running the server: ${err}`);}

    console.log(`Server is running successfully on port: ${port}`);
});