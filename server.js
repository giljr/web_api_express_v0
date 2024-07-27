const express = require('express')
const app = express()
const PORT = 3000
app.set('view engine', 'ejs');
const userRouter = require('./routes/users');
// Routing configuration goes here.
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello Express!' })
  })
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  })