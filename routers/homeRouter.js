// core module
const path = require('path')
// external module
const express = require('express')
// local module
const rootDir = require('../utils/pathUtil')

const homeRouter = express.Router() 

homeRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"))
})

module.exports = homeRouter