const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Room = require('../models/Room');

const authService = {
    generateToken: (user) => {
        return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    },
    verifyToken: (token) => {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
};

const userService = {
    createUser: async (userData) => {
        const user = await User.create(userData);
        return user;
    },
    findUserByEmail: async (email) => {
        return await User.findOne({ where: { email } });
    },
    updateUserProfile: async (userId, profileData) => {
        return await User.update(profileData, { where: { id: userId } });
    }
};

const roomService = {
    createRoom: async (roomData) => {
        const room = await Room.create(roomData);
        return room;
    },
    getRoomById: async (roomId) => {
        return await Room.findByPk(roomId);
    },
    deleteRoom: async (roomId) => {
        return await Room.destroy({ where: { id: roomId } });
    }
};

module.exports = {
    authService,
    userService,
    roomService
};