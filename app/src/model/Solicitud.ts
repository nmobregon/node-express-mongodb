import mongodb = require('mongodb');
import {Profesional} from "./Profesional";
import {Paciente} from "./Paciente";
import {SolicitudForm} from "./form/SolicitudForm"

export interface Solicitud {
    
    _id: mongodb.ObjectID;
    profesional: Profesional;
    paciente:Paciente;
    form:SolicitudForm;
    
}