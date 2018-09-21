'use strict';

var todosDB = require('../db/todos');

exports.createTodo = function(todoData) {
	return new Promise(function(resolve, reject) {
		if (!todoData.description) {
			reject('Missing fields');
			return;
		}

    todoData.createdAt = Date();

		todosDB
			.saveTodo(todoData)
			.then(todo => {
				resolve(todo);
			})
			.catch(err => {
				reject(err);
			});
	});
};

exports.getTodos = function() {
	return new Promise(function(resolve, reject) {
		todosDB
			.getTodos()
			.then(todos => {
				resolve(todos);
			})
			.catch(err => {
				reject(err);
			});
	});
};

exports.closeTodo = function(todoId, newValues) {
  if (!todoId) {
    reject('Missing fields');
    return;
  }

	return new Promise(function(resolve, reject) {
		todosDB
			.closeTodo(todoId, newValues)
			.then(todo => {
				resolve(todo);
			})
			.catch(err => {
				reject(err);
			});
	});
};

exports.getTodo = function(todoId) {
  if (!todoId) {
    reject('Missing fields');
    return;
  }

	return new Promise(function(resolve, reject) {
		todosDB
			.getTodo(todoId)
			.then(todo => {
				resolve(todo);
			})
			.catch(err => {
				reject(err);
			});
	});
};
