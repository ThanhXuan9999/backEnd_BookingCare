import { render } from 'ejs'
import express from 'express'

let router = express.Router()

let initWebRout = (app) => {
    router.get('/', (req, res) => {
        return res.send('sdfjskdfls')
    })

    return app.use('/', router)
}

module.exports = initWebRout