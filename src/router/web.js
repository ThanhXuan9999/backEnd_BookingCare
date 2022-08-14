import { render } from 'ejs'
import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

let initWebRout = (app) => {
    router.get('/', homeController)

    return app.use('/', router)
}

module.exports = initWebRout