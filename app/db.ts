// Mongo
import mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true})
export var db = new mongodb.Db('mydb', server, { w: 1 });