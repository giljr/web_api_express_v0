const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('User List')
})

router.get('/new', (req, res) => {
  res.send('User New Form')
});

// router.get('/:id', (req, res) => {
//   res.send(`User with ID ${req.params.id}`);
// });

router.route('/:id')
  .post((req, res) => {
    const userId = req.params.id;
    res.send(`Post the user with ID ${userId}`)
  })
  .get((req, res) => {
    const userId = req.params.id;
    res.send(`Get the user with ID ${userId}`)
  })
  .put((req, res) => {
    const userId = req.params.id;
    res.send(`Update user with ID ${userId}`)
  })
  .delete((req, res) => {
    const userId = req.params.id;
    res.send(`Delete user with ID ${userId}`)
  })

module.exports = router