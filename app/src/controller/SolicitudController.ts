import express = require("express");
import mongodb = require('mongodb');
import {db} from "../../db";
import {Role} from "../model/security/Role"
import {SolicitudDao} from "../dao/SolicitudDao"
import {SolicitudForm} from "../model/form/SolicitudForm";
//import * as web from 'express-decorators';

//@web.controller('/solicitud')
export class SolicitudController {
    
    //@web.get('/')
    index(req: express.Request, resp: express.Response){
        new SolicitudDao().findAll(solicitudes=>resp.json(solicitudes));
    }
    
    //@web.get('/new')
    create(req: express.Request, resp: express.Response){
        console.log(req.body.edad);
        resp.json(req['file']);
    }
    json(req: express.Request, resp: express.Response){
        
        let body = <SolicitudForm>req.body;
        
        resp.json(body.edad);
    }
    
}