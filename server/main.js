var express = require('express');
var app=express();
var server = require('http').Server(app);

//Flask
var io=require('socket.io')(server);
//socket Io
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM3',{
  baudRate: 9600
});
port.on('error', function(err){
  console.log("error ----> " + err);
})
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

//Serial
parser.on('open',
  function(){
      console.log('Puerto serial conectado');
  }
);

parser.on('data',function(data){
//   console.log(data.toString());
  //Socket Io
  //  io.emit('serial:data',{
  //      value:data.toString()
  //  });
 
});

parser.on('err', function(err){
   console.log(err,message);
});

//socket io
io.on('connection',function(socket){
    console.log('Conexión con éxito');
    socket.on('jostick:data',function(data){
      ava=data.datoAva;
      girY=data.datoGirY;
      activandoMov= data.datoActivandoMov;
      sentido=data.datoSentido;
      motor=data.datoMotor;	
      io.emit('jostick:data',{
        datoAva:ava,
        datoGirY:girY,
        datoActivandoMov:activandoMov,
        datoSentido:sentido,
        datoMotor:motor
      });
    });
    socket.on('serial:data',function(data){
        port.write(data.value.toString(), function(){
          console.log(data.value.toString());
        });
    });

  });

// io.on('connection',function(socket){
//   console.log('un nuevo socket conectado');
// });

//flask
app.use(express.static('public'));

app.get('/',function(req,res){
  res.status(200).send("Hello World");
});
server.listen(8000,function(){
console.log("Servidor corriendo en http://localhost:8000");

});
