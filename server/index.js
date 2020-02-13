const express  = require('express')
const cors = require('cors')
const twilio = require('twilio')

const accountSid = "ACaedf9dc7ad7d7849c35155b364fc8ec4"
const authToken = "5ed9e0338aca5ebd60c52db050b9ff67"
const client = new twilio(accountSid, authToken)

const app = express()

app.use(cors())

app.get('/', (req,res)=>{
    res.send("Hello")
})

app.get('/sendtext', (req, res)=>{
    const {recipient, textMessage} = req.query
    client.messages
  .create({
     body: textMessage,
     from: '+17148824655',
     to: recipient
   })
  .then(message => console.log(message.sid));
})

const PORT = 5000
app.listen(PORT, (req,res)=>{
    console.log(`Server started at port number ${PORT}`)
})