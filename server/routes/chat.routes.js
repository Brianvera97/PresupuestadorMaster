const express = require('express');
const router = express.Router();

const chatController = require('../controllers/chat.controller');
const { authenticate } = require('../config/jwt.config');


/* Rutas Basicas del CRUD */
router.post("", chatController.createChat);
router.get("", authenticate, chatController.getAllChats);
router.get("/:id", authenticate, chatController.getChatMessages);
//router.put("/:id", /* authenticate, */ chatController.updateUser);
//router.delete("/:id", /* authenticate, */ chatController.deleteUser);

/* Rutas de mensajes */
router.post("/message", authenticate, chatController.sendMessage);


module.exports = router;