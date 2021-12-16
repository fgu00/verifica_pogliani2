var express=require("express");
var apiserver=express();

console.log("inizio");
var port=3000;
var host="localhost";
apiserver.listen(port,host,()=>{
    console.log("server running at http://%s:%d",host,port);
});
apiserver.get("/",(request,response)=>{
    response.send("rubrica");
})
