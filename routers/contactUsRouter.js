// core module
const path = require('path')
// external module
const express = require('express')
// local module
const rootDir = require('../utils/pathUtil')

const contactUsRouter = express.Router() 

contactUsRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
    res.sendFile(path.join(rootDir, "views", "contact-us.html"))
})

contactUsRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "views", "contact-success.html"))
})

module.exports = contactUsRouter