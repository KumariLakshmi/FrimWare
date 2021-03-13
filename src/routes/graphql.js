const graphqlHTTP = require('express-graphql').graphqlHTTP
const router = require('express').Router()

const schema=require('../schema/indexSchema')
// const fdadevicepacketsummary=require('../schema/dashboardSchema/indexSchema')


router.get('/', graphqlHTTP({
    schema,
    // fdadevicepacketsummary,
    graphiql: true
}))

router.post('/', graphqlHTTP({
    schema,
    // fdadevicepacketsummary,
    graphiql: true
}))

module.exports = router