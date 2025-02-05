const express = require('express');
const router = express.Router();
const userController = require('../controllers/index');
const roomController = require('../controllers/index');

// User Routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profile', userController.getProfile);
router.put('/profile', userController.updateProfile);

// Room Routes
router.post('/rooms', roomController.createRoom);
router.get('/rooms', roomController.getRooms);
router.get('/rooms/:id', roomController.getRoom);
router.delete('/rooms/:id', roomController.deleteRoom);

// Real-time interaction routes can be added here

module.exports = router;