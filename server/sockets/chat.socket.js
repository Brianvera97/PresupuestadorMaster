module.exports.chatSocket = (socketIO, route) => {

    /* Configuracion del espacio de trabajop */
    const namespace = socketIO.of(route);


    const onConnection = (socket) => {
        /* envie a todos menos al emisor */
        socket.broadcast.emit("join", "new chat member");
        namespace.emit("join", "THIS IS MY NAMESPACE");
        socket.on("join", onRoomJoin(socket));
        socket.on("message", onMessage(socket));
    }
    const onMessage = (socket) => {
        return function (content) {
            console.log("message", content, socket.id);
            namespace.emit("chat", content);
            namespace.to(content.to).emit("direct", content);
        }
    }
    const onRoomJoin = (socket) => {
        return function (roomid) {
            socket.join(roomid);
            this.emit('testsocket', "connected to " + roomid);
            socket.to(roomid).emit('testsocket', `${socket.id} joined the chat`);
        }
    }
    namespace.on("connection", onConnection);

    return namespace;
}