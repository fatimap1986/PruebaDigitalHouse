// ************ Require's ************
const express = require("express");
const router = express.Router();

const heroesController = require ('../controllers/heroesController')

const uploadFile = require ('../middlewares/multerMiddleware')

const Heroe = require("../database/models/Heroe")

router.get('/', heroesController.list);
router.get('/create', heroesController.add)
router.post('/detail', uploadFile.single('imgFile'), heroesController.create)
router.get('/detail/:id', heroesController.detail)
router.get('/detail/edit/:id', heroesController.edit)
router.put('/detail/edit/:id', uploadFile.single('imgFile'), heroesController.update)
router.delete('/detail/delete/:id', heroesController.destroy)


module.exports = router;
