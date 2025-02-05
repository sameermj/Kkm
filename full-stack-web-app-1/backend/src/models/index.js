import { Sequelize } from 'sequelize';
import User from './User.js';
import Room from './Room.js';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

const db = {
    sequelize,
    Sequelize,
    User,
    Room,
};

export default db;