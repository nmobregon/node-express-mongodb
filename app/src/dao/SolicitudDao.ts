import {Role} from "../model/security/Role"
import {GenericDao} from "./GenericDao";
import {db} from "../../db";
import {Solicitud} from "../model/Solicitud";

export class SolicitudDao extends GenericDao<Solicitud> {
    
    collection():string{
        return "solicitudes";
    }
   
}