const { validationResult } = require('express-validator');
const Heroe = require('../database/models/Heroe')

const heroesController = {

    list: async (req, res) => {
        const heroes = await Heroe.findAll()
        res.render('heroes', {heroes})
    },
    detail: async (req, res) => {
           const product = await Heroe.findByPk(req.params.id)
           res.render('heroe', {heroe})
    },
    add: function (req, res) {
        res.render('heroesFormCreate')   
    },
    create: function (req,res) {
console.log(req.body)

        Heroe.create({
            nombre: req.body.name,
            bio: req.body.bio,
            img: req.file.filename,
            aparicion: req.body.date,
            casa: req.body.casa
        })
        .then(() => res.redirect('/heroes'))
    },
    edit: async function(req, res) {
        try
        {const Heroe = await Heroe.findByPk(req.params.id)
         res.render('productsFormEdit', {Heroe})
        }
        catch(e) {console.log(e)}
    },
    update: async function (req,res) { 
        console.log(req.body)
        let heroesToEdit = await Heroe.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(heroe => {
                data = heroe;
                return data;
            })
    
    
            Heroe.update(
                {
                    nombre: req.body.name,
                    bio: req.body.bio,
                    img: req.file.filename,
                    aparicion: req.body.aparicion,
                    casa: req.body.casa     
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(() => res.redirect('/heroes'))
            .catch(error => res.send(error)) 
    },
    
    destroy: async function (req, res) {
        try {
            const deleted = await Heroe.destroy({where: {id:req.params.id}, force: true})
            res.redirect('/heroes')
        }
        catch (e) {console.log(e)}
    }
    }
    
    module.exports = heroesController
