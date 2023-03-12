const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('usuario').notEmpty().withMessage('Tienes que escribir un usuario'),
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un email').bail()
    .isEmail().withMessage('Tienes que escribir un formato de email valido'),
    body('password')
    .notEmpty().withMessage('Tienes que escribir una contraseña')
    .isLength({min: 8}).withMessage('La contraseña debe tener un minimo de 8 caracteres'),
    body('direccion').notEmpty().withMessage('Tienes que elegir una direccion'),
    body('fechaDeNacimiento').notEmpty().withMessage('Tienes que elegir una fecha'),

    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [ '.jpg', '.jpeg' , '.png', '.JPG', '.PNG', '.JPEG'];
        

        if (!file){
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
      
      let fileSize = file.size
      if (fileSize > 1048576) {throw new Error('La imagen no puede pesar mas de 1 MB')}

        return true;
    })
]