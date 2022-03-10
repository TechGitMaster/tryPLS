const localStorage = require('localStorage');

var dataConsist = "";

module.exports = { 
    arguments: (data) => {
        const io = require('socket.io')(data, { transports: ["websocket"] });
    
                io.on('connection' || 'connect', (soc) => {

                    soc.on('send', (data) => {
                        console.log(data);
                        soc.broadcast.emit(data.listen, data.message);
                    });

                });
    }
};