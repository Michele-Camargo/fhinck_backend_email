const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("")
})

app.post('/sendEmail', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabens</h1>')
})

app.listen(3004, () =>{
    console.log(`Servidor executando na porta ${3004}.`)
})
