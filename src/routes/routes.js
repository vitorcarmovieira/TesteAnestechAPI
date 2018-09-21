'use strict';

var todos = require('./todos');

exports.assignRoutes = function(app) {
	app.post('/todos', todos.createTodo);
  app.get('/todos', todos.getTodos);
  app.get('/todos/:todoId', todos.getTodo);
  app.patch('/todos/:todoId', todos.closeTodo);
};
