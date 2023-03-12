const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:hola@localhost:3306/sistema');

const alias = "Heroe"

const cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING
    },
    bio: {
        type: DataTypes.STRING(255)
    },
    img: {
        type: DataTypes.STRING(255)
        },
    aparicion: {
        type: DataTypes.STRING
    },
    casa: {
        type: DataTypes.STRING
    },
    }

const config = {
    tableName: 'heroes',
    timestamps: false
}

const Heroe = sequelize.define(alias, cols, config)

module.exports = Heroe