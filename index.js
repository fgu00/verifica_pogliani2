const { response, request } = require("express");
var express=require("express");
var apiserver=express();
var fs=require("fs");
const { setFlagsFromString } = require("v8");

console.log("inizio");
var port=3000;
var host="localhost";
apiserver.listen(port,host,()=>{
    console.log("server running at http://%s:%d",host,port);
});
apiserver.get("/",(request,response)=>{
    response.send("rubrica");
});
apiserver.get("/aggiungi",(request,response)=>{
    var numero=0;
console.log(request.query.nome+" "+request.query.cognome+" "+request.query.descrizione+" "+request.query.telefono);
fs.readFile("rubbrica.json",(err,data)=>{
    if(err){
        console.log("error "+err);
    }else{
        var lista=JSON.parse(data);
       var contatto={"nome": request.query.nome,"cognome": request.query.cognome,"descrizione": request.query.descrizione, "telefono":request.query.telefono};
       lista[lista.lenght]=contatto;
       fs.writeFile("rubbrica.json",JSON.stringify(contatto),err=>{
           if(err){
               console.log("error "+err );
           }
       });
    
numero++;
console.log("numero "+numero);
    }
});
});
apiserver.get("/tutti",(request,response)=>{
fs.readFile("rubbrica.json",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        var contatto=JSON.parse(data);
        for(var a=0;a<contatto.length;a++){
            console.log("va");
                response.send("il conatto è: "+contatto[a].nome+" "+contatto[a].cognome+" "+contatto[a].descrizione+""+contatto[a].telefono); 
            }  
    }
});
});
apiserver.get("/perCognome",(request,response)=>{
    fs.readFile("rubbrica.json",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            var contatto=JSON.parse(data);
            for(var a=0;a<contatto.length;a++){
               if(contatto[a].cognome==request.query.cognome){
                    response.send("il conatto è: "+contatto[a].nome+" "+contatto[a].cognome+" "+contatto[a].descrizione+""+contatto[a].telefono);  
}
        }
        response.send(students.find(x=>x.cognome===request.query.cognome));
    }
});
});
apiserver.get("/perNome",(request,response)=>{
    fs.readFile("rubbrica.json",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            var contatto=JSON.parse(data);
            for(var a=0;a<contatto.length;a++){
               if(contatto[a].nome==request.query.nome){
                    response.send("il conatto è: "+contatto[a].nome+" "+contatto[a].cognome+" "+contatto[a].descrizione+""+contatto[a].telefono);  
}
        }
        response.send(students.find(x=>x.nome===request.query.nome));
    }
});
});
apiserver.get("/cancellaTutto",(request,response)=>{
    fs.writeFile(" ",(err,data)=>{
        if(err){
            console.log(err);
        }
    });
});
