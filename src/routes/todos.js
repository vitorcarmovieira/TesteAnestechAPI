'use strict';

var todosDomain = require('../domain/todos');
var dateUtils = require('../utils/dateUtils');

exports.createTodo = function(req, res, next) {
	var todoData = req.body;

	todosDomain
		.createTodo(todoData)
		.then(todo => {
			res.send(todo);
		})
		.catch(err => {
			res.status(400).send(err);
		});
};

exports.getTodos = function(req, res, next) {

	todosDomain
		.getTodos()
		.then(todo => {
			res.send(todo);
		})
		.catch(err => {
			res.status(400).send(err);
		});
};

exports.getTodo = function(req, res, next) {
  var todoId = req.params.todoId;

	todosDomain
		.getTodo(todoId)
		.then(todo => {
			res.send(todo);
		})
		.catch(err => {
			res.status(400).send(err);
		});
};


//TODO: não permitir finalizar tarefa que já está finalizada
//TODO: cliente deve passar datahora da finalização
exports.closeTodo = function(req, res, next) {
  var todoId = req.params.todoId;

  const currentDate = Date();
  var newValues = {
    endAt: currentDate,
  }

  todosDomain
    .getTodo(todoId)
    .then(todo => {
      newValues = {
        ...newValues,
        duration: dateUtils.durationTime(todo.createdAt, newValues.endAt)
      };
      console.log(newValues);
      return todosDomain.closeTodo(todoId, newValues)
    })
		.then(todo => {
			res.send(todo);
		})
		.catch(err => {
			res.status(400).send(err);
		});
};