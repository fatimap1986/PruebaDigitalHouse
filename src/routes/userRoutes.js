const express = require('express');
const router = express.Router();
const uploadFile = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const validateLoginForm = require("../middlewares/validateLoginForm")
const validateEditUser = require('../middlewares/validateEditUser')
const usersController = require('../controllers/usersController')
const adminMiddleware = require('../middlewares/adminMiddleware')

// formulario de registro
router.get("/register", usersController.register);
router.get("/create", usersController.userCreate);

// procesar el registro
router.post("/register/create", uploadFile.single("avatar"), validations, usersController.processRegister);
router.post("/create", uploadFile.single("avatar"), validations, usersController.processRegister);


//formualrio de login
router.get("/login", usersController.login);

//procesar el login
router.post("/profile", validateLoginForm, usersController.loginProcess, usersController.profile);

//edicion de usuario
router.get('/profile/edit/:id', authMiddleware, usersController.edit);
router.put('/profile/edit/update/:id', validateEditUser, usersController.update);

//edicion de usuario comun por el usuario administrador
router.get('/user/edit/:id', authMiddleware, usersController.edit2);

//logout
router.post("/logout", usersController.logout)

//usuarios para admin
router.get("/users", usersController.list)
router.delete('/user/delete/:id', usersController.destroy);

module.exports = router
