const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect('mongodb+srv://maksim:010699kmi@cluster0.bbiqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const app = express()
const PORT = 3005
app.use(cors())

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema,
}))

const dbConnection = mongoose.connection
dbConnection.on('error',err=>console.log(`Coonection error: ${err}`))
dbConnection.once('open',()=>console.log('Connected to DB!!!'))

app.listen(PORT,()=>console.log('Сервер запущен'))

