const express = require("express")

const routes = require("./routes")

const server = express()

server.use(routes)

server.get("/", (req, res) => {
  res.json("Server on-line")
})

server.listen(3333)
