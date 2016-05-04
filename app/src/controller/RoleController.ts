import express = require("express");
import mongodb = require('mongodb');
import {db} from "../../db";
import {Role} from "../model/security/Role"
import {RoleDao} from "../dao/RoleDao";
//import * as web from 'express-decorators';

//@web.controller('/solicitud')
export class RoleController  {
    
    //@web.get('/')
    index(req: express.Request, resp: express.Response){
        new RoleDao().findBy("name", "ROLE_OPERATOR", item => {console.log(item);resp.json(item)});
    }
    
    //@web.get('/new')
    new(req: express.Request, resp: express.Response){
        
        var role:Role = {_id: null, name:"ROLE_OPERATOR"};
        
        console.log(role);
         
        db.collection('roles', function(error, rol_collection) {
            if(error) { console.error(error); return; }
            rol_collection.insert(role, (error, rol) => {
                if(error) { console.error(error); return; }
                console.log(rol);
                resp.json(rol);
            });
        });   
    }
    
}