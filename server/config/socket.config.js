const { Server } = require("socket.io");
const { chatSocket } = require("../sockets/chat.socket");
const { socketAuthenticate } = require("./jwt.config");




module.exports.socketInit = (server) => {
    /* Iniciación del SOCKET */
    const socketIO = new Server(server, {
        cors: {
            origin: ["http://localhost:3000", "https://z5vdccfn-3000.brs.devtunnels.ms"],
            allowedHeaders: ["token"],
            credentials: true
        }
    });

    /* Configuracion  AKA namespaces*/
    chatSocket(socketIO, "/chat").use(socketAuthenticate);
    return socketIO;
}