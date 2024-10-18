const express = require('express')

const app = express();

app.use((req, res, next) => {
  console.log("1st middleware", req.url, req.method);
  next()
})

app.use((req, res, next) => {
  console.log("2nd middleware", req.url, req.method);
  next()
})

// app.use((req, res, next) => {
//   console.log("3rd middleware", req.url, req.method);
//   res.send("<h1>welcome :)</h1>")
// })

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send("<h1>welcome :)</h1>")
})

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Feel free to contact us</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="enter your name"/>
    <input type="email" name="email" placeholder="enter your email"/>
    <input type="submit"/>
    </form>
    `)
})

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
   res.send(`
    <h1>Thanks for the details :) </h1>
    <p>We will contact you shortly!</p>
    `)
})

const PORT = 3000;

app.listen(PORT, ()=> {
  console.log(`server is running on address http://localhost:${PORT}`)
})