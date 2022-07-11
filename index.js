const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Todolist = require('./models/todolist');

const app = express();

app.use('/', require('./routes/index'));

app.set('view engine', 'ejs');
app.set('views', './views');

//app.use(express.urlencoded());
app.use(express.static('assets'));

/*app.get('/', function(req, res){
    Todolist.find({}, function(err, lists){
        if(err){
            console.log('Error');
            return;
        }

        return res.render('home', {
            title: "ToDoList App",
            todolist: lists
        });
    });
});

app.post('/create_list', function(req, res){
    Todolist.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err, newList){
        if(err){
            console.log("Error");
            return;
        }

        return res.redirect('back');
    });
});

app.post('/delete', function(req, res){
    const id = req.body.checkbox;

    Todolist.findByIdAndRemove(id, function(err){
        if(err){
            console.log('Error');
            return;
        }

        return res.redirect('back');
    });
});*/


app.listen(port, function(err){
    if(err){console.log(`Error in running the server: ${err}`);}

    console.log(`Server is running successfully on port: ${port}`);
});