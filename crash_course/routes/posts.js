// const express = require('express')
import express from 'express'
import {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
  } from '../controllers/postController.js'

const router = express.Router()

// let posts = [
//     {id: 1, title: 'Post One'},
//     {id: 2, title: 'Post Two'},
//     {id: 3, title: 'Post Three'}        
// ]

// // Middleware routes
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
//     next()
// }

// Get all posts
// router.get('/api/posts', (req, res) => {
// router.get('/', (req, res, next) => {
// router.get('/', logger, (req, res) => {
// console.log(req.query)
//     const limit = parseInt(req.query.limit)

//     if (!isNaN(limit) && limit > 0) {
//         return res.status(200).json(posts.slice(0, limit))
//     }
//     req.res.status(200).json(posts)
    
//     //} else{
//     //    res.status(200).json(posts)
//     //}
// })


// Get all posts
router.get('/', getPosts)


// Get single post
// router.get('/api/posts/:id', (req, res) => {
    // router.get('/:id', (req, res, next) => {
    // const id = parseInt(req.params.id)
    // const post = posts.find((post) => post.id === id)
    // if (!post) {
    //     // return res.status(404).json({msg: `A post the the id of ${id} was not found`}) // error handler
    //     const error = new Error(`A post with id ${id} was not found`)
    //     error.status = 404
    //     return next(error)
    // }
    // res.status(200).json(post)

    // } else {
    //     res.status(200).json(post)
    // }
    // res.status(200).json(posts.find((post) => post.id === id))
    // res.json(posts.filter((post) => posts.id === id))
    // console.log(req.params)
    // res.json(posts)
// })

// Get single post
router.get('/:id', getPost)

// Create a new post
// router.post('/', (req, res, next) => {
//     // console.log(req.body)
//     const newPost = {
//         // id: Date.now(),
//         id: posts.length + 1,
//         title: req.body.title
//     }
//     if (!newPost.title) {
//         // return res.status(400).json({msg: 'Please include a title'})
//         const error = new Error(`Please include a title`)
//         error.status = 400
//         return next(error)
//     }
//     posts.push(newPost)
//     res.status(201).json(newPost)
//  })

// Create new post
router.post('/', createPost)

 // Update a post
//  router.put('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id)
//     const post = posts.find((post) => post.id === id)
//     if (!post) {
//         return res.status(404).json({msg: `A post the the id of ${id} was not found`})
//     }
//     if (!req.body.title) {
//         // return res.status(400).json({msg: 'Please include a title'})
//         const error = new Error(`Please include a title`)
//         error.status = 400
//         return next(error)
//     }
//     post.title = req.body.title
//     res.status(200).json(post)
//  })

// Update Post
router.put('/:id', updatePost)
// Delete a post
// router.delete('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id)
//     const post = posts.find((post) => post.id === id)
//     if (!post) {
//         // return res.status(404).json({msg: `A post the the id of ${id} was not found`})
//         const error = new Error(`A post the id of ${id} was not found`)
//         error.status = 404
//         return next(error)
//     }
//     const index = posts.indexOf(post)
//     posts.splice(index, 1)
//     res.status(200).json({msg: `Post with id ${id} has been deleted`})
// })


// Delete Post
router.delete('/:id', deletePost)

// module.exports = router
export default router