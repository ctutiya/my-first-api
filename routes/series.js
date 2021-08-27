// import express
const express = require('express')

// create an express router
const router = express.Router()

const data = [
    { 'title': 'Breaking Bad', 'cast': 'Bryan Cranston, Aaron Paul, Anna Gunn' },
    { 'title': 'La Casa de Papel', 'cast': 'Úrsula Corberó, Álvaro Morte, Itziar Ituño' },
    { 'title': 'The Blacklist', 'cast': 'James Spader, Megan Boone, Diego Klattenhoff' },
    { 'title': 'New Amsterdam', 'cast': 'Ryan Eggold, Freema Agyeman, Janet Montgomery' },
    { 'title': 'Cobra Kai', 'cast': 'Ralph Macchio, William Zabka, Xolo Maridueña' }
]

// create our routes
router.get('', (req, res) => {
    res.json({
        'route': 'series',
        'success': true
    })
})

router.get('/top5', (req, res) => {
    res.json(data)
})

const auth = require('../authorization/auth')

router.get('/top5-protected', auth, (req, res) => {
    res.json(data)
})

// export module
module.exports = router