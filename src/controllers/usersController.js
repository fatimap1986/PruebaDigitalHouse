const { validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const User = require('../database/models/User')

const controller = {
    register: (req, res) => {

        return res.render('register');
  
    },

    userCreate: (req, res) => {

        return res.render('userFormCreate')    
    },
    
    processRegister: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
      const userInDB = await User.findOne({ where: { email: req.body.email } })
        if (userInDB) {
            return res.render('register', {
                errors: {
                    msg: 'Este email ya está registrado'
                },
               oldData: req.body
            });
         }
        const userTocreate = await User.create({
            usuario: req.body.usuario,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            direccion: req.body.direccion,
            fecha_nacimiento: req.body.fechaDeNacimiento,
            img: req.file.filename,
            rol: req.body.rol
        })
        res.redirect('/login')

    },

    login: (req, res) => {
        console.log(req)
        return res.render('logIn')
    },

    loginProcess: async (req, res, next) => {
     const userToLogin = await User.findOne({ where: { email: req.body.email } });
    
        if (userToLogin) {
            let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                // userToLogin.password = "********";
                 req.user = userToLogin;
         
              // if (req.body.recordarUsuario) {
                //    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                //}

              return next()
            } else {
                return res.render('logIn', {
                    errors: {
                        email: {
                            msg: 'Credenciales invalidas'
                        }
                    }
                })
            }
        } else {
            if (!req.body.email) {
                return res.render('login', {
                    errors:
                    {
                        email: {
                            msg: "El Email es Obligatorio."
                        }
                    }
                })
            } else{ 
                return res.render('logIn', {
                    errors: {
                        email: {
                            msg: 'No se encuentra este email en nuestra base de datos'
                        }
                    }
                })
            }
        }    
    },
    profile: (req, res) => {
         return res.render('userProfile', {
         user: req.user
        });
    },

    edit: async function(req, res) {
        try
        {const user = await User.findByPk(req.params.id)
         res.render('userFormEdit', {user})
        }
        catch(e) {console.log(e)}
    },

    edit2: async function(req, res) {
        try
        {const user = await User.findByPk(req.params.id)
         res.render('userFormEdit2', {user})
        }
        catch(e) {console.log(e)}
    },

    update: async function (req,res) { 
        let userToEdit = await User.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(user => {
                data = user;
                return data;
            })
            
    
            User.update(
                {
                    usuario: req.body.usuario,
                    direccion: req.body.direccion,
                    password: bcrypt.hashSync(req.body.password, 10),

                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(() => res.redirect('/profile'))
            .catch(error => res.send(error)) 
    },



    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.locals.isLogged = false
        res.locals.userLogged = undefined
        res.clearCookie('connect.sid');
        return res.redirect('/');
    },

    list: async (req, res) => {
       const users = await User.findAll({ where: { rol: "comun" } })
        res.render('usuarios', {users})
    },

    destroy: async function (req, res) {
        try {
            const deleted = await User.destroy({where: {id:req.params.id}, force: true})
            res.redirect('/users')
        }
        catch (e) {console.log(e)}
    }

}

module.exports = controller;