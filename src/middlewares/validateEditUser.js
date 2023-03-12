const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('usuario')
        .notEmpty().withMessage('Este campo no debe estar vacio').bail(),
    body('direccion')
        .notEmpty().withMessage('Este campo no debe estar vacio').bail()
]