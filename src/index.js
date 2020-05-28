import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import { Database } from './database';
const app = express();

Database();

app.get('/', (req, res, next) => {
    res.json({
            messsage : 'Hello World'
    })
})



app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))



app.listen(4000, () => {
    console.log('Server on port 4000');
})