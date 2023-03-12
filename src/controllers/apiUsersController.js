const User = require('../database/models/User')

module.exports = {
    all: async (req, res) => {
        let response = {
        count: 0, 
        users: []
      }
      let users = await User.findAll()
      response.count = users.length
      response.users = users.map(user => {
        let userDetail = {
          id: user.id,
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
          detail: `/api/users/${user.id}`
        }
        return userDetail
      })
      return res.json(response)
    },
    detail: async (req, res) => {
    let user = await User.findByPk(req.params.id)
    let response = {
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      image: `http://localhost:3002/images/${user.img}`
    }
    return res.json(response)
    }
}