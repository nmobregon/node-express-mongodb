import mongodb = require('mongodb');
import {Profesional} from "./Profesional"


export interface Paciente {
    
    _id:mongodb.ObjectID;
    profesional:Profesional;
    nombre:string;
    tipoDoc:string;
    numeroDoc:string;
        
}