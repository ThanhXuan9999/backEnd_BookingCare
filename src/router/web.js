import { render } from 'ejs'
import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

let initWebRout = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/crud', homeController.crud)
    router.post('/post-crud', homeController.postCRUD)

    return app.use('/', router)
}

module.exports = initWebRout