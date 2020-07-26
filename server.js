const express = require('express');
const expressGraphQL = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('./mongoose/mongoose');

const app = express();
const port = process.env.PORT || 4400;
const typeDefs = require('./schema/schema');
const resolvers = require('./schema/resolvers');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use('/graphql', expressGraphQL.graphqlHTTP({
    schema,
    graphiql: true
}));

app.get('/', (req, res, next) => {
    res.send( `Server is running on port ${ port }` );
});

app.listen( port, () => {
    console.log(`Server running on port ${ port }`) 
});