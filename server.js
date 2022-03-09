const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

const app = express();


app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {

     // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', '*');

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With , Content-type, Accept, Origin');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);
 
     // Pass to next layer of middleware
     next();
});

//Your server

app.use('/', require('./folderFile/serv1'));

app.use(express.static('./dist/try-pls'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/try-pls/'}),
);


var server = require('http').createServer(app); 

const io = require('socket.io')(server, {
	serveClient: true,
        cors: {
            origins: ['//angularsts.herokuapp.com']
        }
});

io.on('connection' || 'connect' ,(soc) => {
    soc.emit('test', 'heelo');
});

server.listen(( process.env.PORT || 8080 ), () => console.log('Successful') );