import mongodb = require('mongodb');

export interface Role {
    
    _id: mongodb.ObjectID;
    name: string;
            
}