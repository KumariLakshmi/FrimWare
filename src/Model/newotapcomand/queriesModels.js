const { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} = require('graphql')
const type = require('./type')
// const mutation = require('./mutations')
const Otapcommand = require('./newotapcommandModels')

// Defines the queries
module.exports = {
    new: {
    type: new GraphQLList(type),
    PacketID:{
        type:GraphQLInt
    },
    // DeviceID: {
    //     type: GraphQLString
    // },
    // Name: {
    //     type: GraphQLString
    // },
    // Message: {
    //     type: GraphQLString
    // },
    resolve: Otapcommand.getByID.bind(Otapcommand)
},
command: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: Otapcommand.getByID.bind(Otapcommand)
}
}