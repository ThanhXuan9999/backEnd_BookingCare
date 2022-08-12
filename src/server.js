import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initWebRout from './router/web'
require('dotenv').config()

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRout(app)

let port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`port: http://localhost:${port}`)
})