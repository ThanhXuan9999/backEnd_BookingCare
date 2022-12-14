import db from '../models/index'
import bcrypt from 'bcryptjs';
let salt = bcrypt.genSaltSync(10);


let createNewUser = async (data) => {
    console.log(data)
    return new Promise(async (resolve, reject) => {
        try {
            let hashUserPasswordBcript = await hashUserPassword(data.password)

            await db.User.create({
                email: data.email,
                password: hashUserPasswordBcript,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '0' ? true : false, // chỗ này còn lỗi 0 và 1
                roleId: data.roleId,
            })

            resolve(' ok create new user succeed!')

        } catch (error) {
            reject(error)
        }
    })

}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllUser = () => {
    try {
        return new Promise(async (resolve, reject) => {
            let user = await db.User.findAll({
                raw: true,
            })

            resolve(user)
        })
    } catch (error) {
        reject(error)
    }
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataUser = await db.User.findOne({
                where: { id: userId },
                raw: true,
            })

            if (dataUser) {
                resolve(dataUser)
            } else {
                resolve({})
            }
        } catch (error) {
            reject(error)
        }
    })
}
let updateDataUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataUser = await db.User.findOne({
                where: { id: data.id },
            })

            if (dataUser) {
                dataUser.firstName = data.firstName
                dataUser.lastName = data.lastName
                dataUser.address = data.address

                await dataUser.save()

                let allUser = await db.User.findAll()

                resolve(allUser)
            } else {
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}

let deleteUserCRUD = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataUser = await db.User.findOne({
                where: { id: userId },
            })

            if (dataUser) {
                dataUser.destroy()
            }

            resolve()
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateDataUser: updateDataUser,
    deleteUserCRUD: deleteUserCRUD,
}