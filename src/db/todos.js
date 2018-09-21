'use strict';

var db_tools = require('../tools/db_tools');
var mongoose = require('mongoose');
var dateUtils = require('../utils/dateUtils');

// database connect
var db = db_tools.DBConnectMongoose();

// Create a Mongoose schema
var TodoSchema = new mongoose.Schema({
	description: String,
  createdAt: Date,
  endAt: Date,
  duration: String,
});

// Register the schema
var Todo = mongoose.model('todo', TodoSchema);

exports.Todo = Todo;
exports.saveTodo = function(todoData) {
	var todo = new Todo(todoData);
	return new Promise(function(resolve, reject) {
		todo
			.save()
			.then(todo => {
				console.log('Todo saved!');
				resolve(todo);
			})
			.catch(err => {
				console.log('Error saving todo: ' + err);
				reject(err);
			});
	});
};

exports.getTodos = function() {
	return new Promise(function(resolve, reject) {
    Todo
      .find()
			.then(todos => {
        console.log('Get Todos!');
				resolve(todos);
			})
			.catch(err => {
        console.log('Error get todos: ' + err);
				reject(err);
			});
	});
};

exports.closeTodo = function(todoId, newValues) {
	return new Promise(function(resolve, reject) {
    Todo
      .updateOne({_id: todoId}, { $set: newValues})
			.then(todos => {
        console.log('Todo '+todoId+' closed!');
				resolve(todos);
			})
			.catch(err => {
        console.log('Error update todo: ' + err);
				reject(err);
			});
	});
};

exports.getTodo = function(todoId) {
	return new Promise(function(resolve, reject) {
    Todo
      .findOne({ _id: todoId})
			.then(todo => {
        console.log('Get Todo!');
				resolve(todo);
			})
			.catch(err => {
        console.log('Error get todos: ' + err);
				reject(err);
			});
	});
};