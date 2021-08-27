// import express
const express = require('express')

// create an express router
const router = express.Router()

// create our routes
router.get('', (req, res) => {
    res.json({
        'route': 'users',
        'success': true
    })
})

// export module
module.exports = router