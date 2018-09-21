'use strict';

var mongoose = require('mongoose');

var db;

exports.DBConnectMongoose = function() {
	return new Promise(function(resolve, reject) {
		if (db) {
			return db;
		}
		mongoose.Promise = global.Promise;

    //TODO: variaveis de ambiente para conexão com banco
		mongoose
			.connect('mongodb+srv://testeanestech:anes123@cluster0-yzfud.mongodb.net/test?retryWrites=true')
			.then(() => {
				console.log('mongo connection created');
				resolve(db);
			})
			.catch(err => {
				console.log('error creating db connection: ' + err);
				reject(db);
			});
	});
};
