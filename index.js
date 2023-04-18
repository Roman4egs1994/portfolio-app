const express = require('express')
const nodemailer = require("nodemailer");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    requireTLS:true,
    // tls: {
    //     rejectUnauthorized: false
    // },
    auth: {
        user: "romanmoisidi@gmail.com", // generated ethereal user
        pass: "ddqlcezhpyomwilp", // generated ethereal password
    },
});



app.get('/', function (req, res){
    res.send('Hello World')
})

app.post('/sendMessage', async function (req, res) {

    let {Name, Email, text, message } = req.body

    let info = await transporter.sendMail({
        from: 'HR WANTS ME', // sender address
        to: "romanmoisidi@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        //text: "Hello world?", // plain text body
        html: `<b>Hello world?</b>
                <div>${Name}</div>
                <div>${Email}</div>
                <div>${text}</div>
                <div>${message}</div>
`
    });



    res.send(req.body)
})



app.listen(3010, function () {
    console.log('Example app listening on port 3010!')
})