const express = require('express')
const app = express()
const PORT = 3000

// Set view engine
app.set('view engine', 'ejs')

// Custom middleware function
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}\n`)
  next() // Pass the request to the next middleware function
}

// Another custom middleware function
const authMiddleware = (req, res, next) => {
  const auth = req.headers['authorization']
  if (auth === 'secret-token') {
      next(); // Pass the request to the next middleware function
  } else {
      res.status(401).send('Unauthorized')
  }
};

// Use the middleware functions in the app
app.use(loggerMiddleware)
app.use(authMiddleware)

// Import user routes
const userRouter = require('./routes/users')

// Routing configuration goes here.
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello Express!' })
  })
app.use('/users', userRouter)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  })