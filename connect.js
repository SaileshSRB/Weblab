const mongoose = require('mongoose')

const connectionString =
    ' mongodb+srv://user1:may302002@cluster0.f9hqnh2.mongodb.net/test'
const connectDB = (url) => {
    return mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
}

module.exports = connectDB
