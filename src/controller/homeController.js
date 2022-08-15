import CRUDService from '../service/CRUDService'

const db = require("../models")

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()

        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error)
    }

}

let crud = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let messge = await CRUDService.createNewUser(req.body)
    console.log(messge)
    return res.send('halo')
}

module.exports = {
    getHomePage: getHomePage,
    crud: crud,
    postCRUD: postCRUD
}