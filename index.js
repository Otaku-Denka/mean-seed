var express = require('express')

var app = express();

app.use(express.static(__dirname + "/app"));
app.use(express.static(__dirname + "/node_modules"))

// app.get('/',function(req,res){
// 	res.sendfile('./app/index.html')
// })

app.listen('3000',function(){
	console.log('Listening to port 3000')
})