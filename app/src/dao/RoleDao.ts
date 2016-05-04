import {Role} from "../model/security/Role"
import {GenericDao} from "./GenericDao";
import {db} from "../../db";

export class RoleDao extends GenericDao<Role> {
    
    collection():string{
        return "roles";
    }
   
}