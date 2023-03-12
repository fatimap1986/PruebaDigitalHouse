function adminMiddleware(req, res, next){
    if (req.session.userLogged.rol != "administrador") {
        return res.redirect('/');
    }
    next();
}

module.exports = adminMiddleware