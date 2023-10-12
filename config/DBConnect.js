const { config } = require('dotenv')
const monggose = require('mongoose')
require('dotenv').config();

exports.DBConnect = () => {
    monggose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB Connected Successfully")
    }).catch(() => {
        console.log("Error While Connecting Database")
    })
} 