const express = require('express') // external module
const path = require('path') // core module
const rootDir = require('./utils/pathUtil') // local module

// Importing routers for different routes
const homeRouter = require('./routers/homeRouter')
const contactUsRouter = require('./routers/contactUsRouter')

// Creating an instance of an Express application
const app = express();

// Middleware to parse URL-encoded data from incoming requests
app.use(express.urlencoded()) // Parses data from HTML forms

// Routing requests based on the URL - home and contact us routes
app.use(homeRouter)
app.use(contactUsRouter)

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"))
})

const PORT = 3000;

// Starting the server and listening on the defined port
app.listen(PORT, ()=> {
  console.log(`server is running on address http://localhost:${PORT}`)
})