const express = require('express')
const app = express()
require('dotenv').config()
const { DBConnect } = require("./config/DBConnect")
const cors = require('cors')
const router = require("./route")
const PORT = process.env.PORT || 4000;
// Bodyparser middleware
app.use(express.json())
app.use(cors(
    {
        origin: "*",
        credentials: true
    }
))

DBConnect();
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})