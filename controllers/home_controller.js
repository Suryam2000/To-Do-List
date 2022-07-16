const Todolist = require('../models/todolist');

module.exports.home = function(req, res){
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
};

module.exports.createList = function(req, res){
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
};

module.exports.deleteList = function(req, res){
    var id = req.body.check;

    id.forEach(element => {
        Todolist.findByIdAndDelete(element, function(err){
            if(err){
                console.log('Error');
                return;
            }
        });
    });

    res.redirect('back');
};