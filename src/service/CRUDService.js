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

module.exports = {
    createNewUser: createNewUser
}