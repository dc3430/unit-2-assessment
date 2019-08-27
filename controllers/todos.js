var todos = require ('../models/todo');

module.exports = {
    index,
    create,
    delete: deleteOne
}

function deleteOne(req, res){
    todos.deleteOne(req.params.id);
    res.redirect('/todos');
}
  

function create(req, res) {
    // console.log(req.body.todo);
    //req.body.done = false;
    todos.create(req.body.todo);
    console.log(todos.getAll())
    res.redirect('/todos')
}


function index(req, res) {
    res.render(
        'todos/index', 
        {
            todos: todos.getAll(),
            time: req.time
        }
    )
}