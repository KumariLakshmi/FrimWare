const { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const mutation = require('./mutationsModels')
const otapcommand = require('./otapcommandModels')

// Defines the queries
module.exports = {
    otapcommand: {
    type: new GraphQLList(type),
    args: {
        PacketID: {
        type: GraphQLInt
    },
        DeviceID: {
            type: GraphQLString
        },
        
        Name:{
            type: GraphQLString
        },
        Message:{
            type: GraphQLString
        }
    },
    resolve: otapcommand.findMatching.bind(otapcommand)
},
command: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: otapcommand.getByID.bind(otapcommand)
}
}