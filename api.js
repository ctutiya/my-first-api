// import express
const express = require('express')

// create an express application
const app = express()

// import dotenv module and read .env files
// You can also run your js file with node -r dotenv/config file.js command
// if you don't want to import the package in your code
// require('dotenv').config()

// assign a port
const port = process.env.PORT || 5050

// import the routes
const moviesRoutes = require('./routes/movies')
const seriesRoutes = require('./routes/series')
const usersRoutes = require('./routes/users')

// call the routes
app.use('/api/movies', moviesRoutes)
app.use('/api/series', seriesRoutes)
app.use('/api/users', usersRoutes)

// 404
app.use((req, res) => {
    res.status(404).send(`Route "${req.originalUrl}" not found`)
})

// listen to port
app.listen(port, () => console.log(`Server running at http://localhost:${port}`))