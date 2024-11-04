// const express = require('express')
import express from 'express'

// const path = require('path')
import path from 'path'

import { fileURLToPath } from 'url'

// const posts = require('./routes/posts.js')
import posts from './routes/posts.js'

// require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config()

// Middleware routes on console - ex: DELETE http://localhost:8000/api/posts/3
import logger from './middleware/logger.js'

// not found routes on console
import notFound from './middleware/notFound.js'

//Error routes on console - ex:
import errorHandler from './middleware/error.js'

const PORT = process.env.PORT || 8000

// GET THE DIRECTORY name
const __filename = fileURLToPath(import.meta.url)
// console.log(__filename)
const __dirname = path.dirname(__filename)

const app = express()

//set up static folder
app.use(express.static(path.join(__dirname, 'public')))

// Use middleware to serve static files (above)
// 1
// Get all posts
// app.get('/', (req, res) => {    
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     // res.send({message: 'Hello world'})
//     // res.send('<h1>Hello world</h1>')
// })

// 2
// app.get('/about', (req, res) => {    
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
//     // res.send({message: 'about me'})
//     // res.send('<h1>Hello world</h1>')
// })

// 3
// let posts = [
//     { id: 1, title: 'Post One' },
//     { id: 2, title: 'Post Two' },
//     { id: 3, title: 'Post Three' },
// //   ]
//
// 4
// Get all posts
// app.get('/api/posts', (req, res) => {
//     res.json(posts)
// })
//
// 5
// Get a single posts use /api/posts/1
// app.get('/api/posts/:id', (req, res) => {
//     console.log(req.params)
//     const id= parseInt(req.params.id)
//     res.json(posts.find(post)=> post.id ==id)) // function receives a post, if that post id is equal to the ID passed, return this post 
// })
//
// 6 passing queries like // /api/posts/1?limit=2&sort=desc
// app.get('/api/posts, (req, res) => {
//     console.log(req.query)
//     const limit = parseInt(req.query.limit) || 10
//     const sort = req.query.sort || 'asc'
//     const posts = posts.sort((a, b) => {
//         if (sort === 'asc') return a.id - b.id
//         else return b.id - a.id
//     }).slice(0, limit)
//     res.json(posts)
// })
//
// 7 transfer all to routes/posts.js 
//
// Body parser Middleware
// For raw responses
app.use(express.json())
// For urlencoded responses
app.use(express.urlencoded({ extended: false }))
// middleware use

// Routes
app.use('/api/posts', posts)
app.use(logger)
// Not Found Middleware
// app.use((req, res, next) => {
//     const error = new Error('Not Found')
//     error.status = 404
//     next(error)
// })
// ERROR handler
app.use(notFound)
app.use(errorHandler)




app.listen(PORT, console.log(`Server is running on port ${PORT}`))
