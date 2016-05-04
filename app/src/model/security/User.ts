import mongodb = require('mongodb');
import {Role} from "./Role";

export interface User {
    
    _id: mongodb.ObjectID;
    email: string;
    password: string;
    role:Role[];
            
}