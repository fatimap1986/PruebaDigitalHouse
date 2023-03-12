const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:hola@localhost:3306/sistema');

const alias = "User"

const cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rol: {
        type: DataTypes.STRING,
    },
    usuario: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING(255)
    },
    direccion: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    img: {
    type: DataTypes.STRING(255)
    }}

const config = {
    tableName: 'usuarios',
    timestamps: false
}

const Usuario = sequelize.define(alias, cols, config)

module.exports = Usuario