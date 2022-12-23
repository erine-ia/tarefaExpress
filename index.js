const express = require('express')
const app = express()
const  rotas = require('./routers/index')
const path = require('path')
const basePath = path.join(__dirname, 'templates')
port = 5000

app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use('/', rotas)
app.use(express.static('public'))

app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port} `)
})
