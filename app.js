const express = require("express")
const app = express()

var port = process.env.PORT || 3000

app.get("/lampu1/:status1/lampu2/:status2",function(req,res){
    var statusLampu = req.params.status1
    var statusLampu2 = req.params.status2
    res.send({
        lampu1:parseInt(statusLampu),
        lampu2:parseInt(statusLampu2)
    })
})

app.listen(port,function(){
    console.log("Server is running")
})