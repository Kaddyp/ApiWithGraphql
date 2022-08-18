const express = require('express');
const expressGraphQl = require('express-graphql').graphqlHTTP;
const port = 4800;
const app = express();
const schema = require('./schema/schema');
//Created
app.use('/graphql',expressGraphQl({
    schema,
    graphiql:true
}) )

app.listen(port, () => {
    console.log(`listing to port ${port}`)
})