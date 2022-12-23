const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../templates')


router.get('/', (req, res) =>{
    res.sendFile(`${basePath}/home.html`)
    
})

router.get('/sobre', (req, res) =>{
    res.sendFile(`${basePath}/sobre.html`)
})

router.get('/galeria', (req, res) =>{
    res.sendFile(`${basePath}/galeria.html`)
})



module.exports = router