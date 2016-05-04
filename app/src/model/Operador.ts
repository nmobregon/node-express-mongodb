import mongodb = require('mongodb');
import {User} from "./security/User";

export interface Operador {
    
    _id: mongodb.ObjectID;
    nombre: string;
    user:User;
            
}