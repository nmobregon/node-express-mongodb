import {db} from "../../db";

export abstract class GenericDao<T> {
    
    protected resp;
    protected callback;
    protected prepared:boolean = false;
    
    prepare(resp, callback){
        this.resp = resp;
        this.callback = callback;
        this.prepared = true;
        return this;
    }
    
    findById(id:number){
        
        db.open(function() {});
        console.log("abro la conexion");
        
        db.collection(this.collection(), function(error, coll) {
            if(error) { console.error(error); return; }
            console.log("1", coll, id);
            coll.findOne({_id: id}, function(error, item) {
                console.log(2, error, item);    
                if(error) { console.error(error); return; }
                db.close();
                console.log("cierro la conexion");
                if (this.prepared){
                    this.callback(this.resp, item);
                }else{
                    return item;    
                }
            });
        });
    }
    
    findBy(column:string, value:any, callback:(role: any) => void){
        
        var $this = this;
        
        var query = {};
        query[column]=value;

        db.open(function (err, db) { 
            console.log("abro la conexion");
            db.collection($this.collection(), function(error, coll) {
                if(error) { console.error(error); return; }
                console.log(1.5, $this.collection(), query);
                coll.find(query).toArray(function(error, item) {
                    console.log(2, error, item);    
                    if(error) { console.error(error); return; }
                    db.close();
                    console.log("cierro la conexion");
                    callback(item);
                });
            });
        });
    }
    
    findAll(callback:(items:any)=>void){
        var $this = this;
        db.open(function (err, db) { 
            console.log("abro la conexion");
            db.collection($this.collection(), function(error, coll) {
                if(error) { console.error(error); return; }
                coll.find({}).toArray(function(error, item) {
                    console.log(2, error, item);    
                    if(error) { console.error(error); return; }
                    db.close();
                    console.log("cierro la conexion");
                    callback(item);
                });
            });
        });
    }
    
    abstract collection():string;
    
}