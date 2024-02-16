


module.exports.sendMultiple = (socketIO, namespace, message, receivers) => {
    receivers.forEach((item) => {
        const receiver = String(item._id);
        socketIO.of(namespace).to(receiver).emit("direct", message);
    });
}