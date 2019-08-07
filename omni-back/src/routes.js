const { Router } = require("express")

const routes = Router()

routes.get("/", (req, res) => {
  res.json({ message: "Server on line" })
})

module.exports = routes
