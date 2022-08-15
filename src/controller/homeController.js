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

let displayGetCRUD = async (req, res) => {
    let user = await CRUDService.getAllUser()

    return res.render('displayCRUD.ejs', {
        data: user,
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id

    if (userId) {
        let data = await CRUDService.getUserInfoById(userId)

        console.log(data)
        return res.render('editUser.ejs', {
            user: data
        })
    } else {
        return res.send('User Not Found!')
    }
}

let putCRUD = async (req, res) => {
    let data = req.body
    let allUser = await CRUDService.updateDataUser(data)

    return res.render('displayCRUD.ejs', {
        data: allUser,
    })
}

let getDeleteCRUD = async (req, res) => {
    let userId = req.query.id

    if (userId) {
        await CRUDService.deleteUserCRUD(userId)

        return res.send('Delete success!')
    } else {
        return res.send('Not Found User')
    }
}

module.exports = {
    getHomePage: getHomePage,
    crud: crud,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    getDeleteCRUD: getDeleteCRUD,
}