const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/gql')

mongoose.connection.once('open', () => {
    console.log('Connected to the database Successfully')
})

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(4000, () => {
    console.log('Server listening on port 4000')
})
