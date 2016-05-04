import * as http from "http";
import * as url from "url";
import * as express from "express";
import * as bodyParser from "body-parser";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import {RoleController} from "./src/controller/RoleController"
import {SolicitudController} from "./src/controller/SolicitudController"

var app = express(),
    cors = require('cors'),
    multer  = require('multer'),
    upload = multer({ dest: 'uploads/' }),
    passport = require('passport'),
    config = require('./config/config');

// Configuration
app.use(passport.initialize());
app.use(passport.session());;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if ((process.env.NODE_ENV === 'development') {  app.use(errorHandler());}

var rolCtrl = new RoleController();
var solCtrl = new SolicitudController();

// Routes
app.get('/', rolCtrl.index);
app.get('/solicitud', solCtrl.index);
app.post('/solicitud/create', upload.single('archivo'), solCtrl.create);
app.post('/solicitud/json', solCtrl.json);

app.listen(config.port, function(){
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});

export var App = app;