require('dotenv').config()
const express = require('express');
/* NEW FOR SOCKET IO */
const { createServer } = require('http');
const { socketInit } = require('./config/socket.config');


const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

/* NEW FOR SOCKET IO */
const httpServer = createServer(app);


require('./config/mongoose.config');


app.use(cookieParser());

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000", "https://z5vdccfn-3000.brs.devtunnels.ms"]
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* WEBSOCKET */
const socketIO = socketInit(httpServer);
/* El uso del socket dentro de las rutas */
app.use((req, res, next) => {
    req.io = socketIO;
    return next();
});

app.use(express.static('public'));



const sessionRoutes = require('./routes/session.routes');
app.use("/api/session", sessionRoutes);

const userRoutes = require('./routes/user.routes');
app.use("/api/user", userRoutes);

const chatRoutes = require('./routes/chat.routes');
app.use("/api/chat", chatRoutes);


httpServer.listen(port, () => console.log(`Listening on port: ${port}`));