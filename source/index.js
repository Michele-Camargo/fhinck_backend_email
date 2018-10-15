const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("")
})

app.post('/sendEmail', (req, resp) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: 'michele.desafio.fhink@hotmail.com',
            pass: 'fhinkdesafio123'
        }
    });


    let mailOptions = {
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message + '\n\nEnviado de : ' + req.body.nome
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            resp.send('<h1>Não foi possivel enviar o email, tente novamente.</h1>')
            return console.log(error);
        } else {
            resp.send('<h1>Email enviado com sucesso! Vamos trabahar nisso!</h1>')
        }

        console.log('Message sent: %s', info.messageId);

    })
})

app.listen(3004, () => {
    console.log(`Servidor executando na porta ${3004}.`)
})
