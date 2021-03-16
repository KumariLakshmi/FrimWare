const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const  otapcommand = require('./otapcommandModels')

// Defines the mutations
module.exports = {
    addotapcommand: {
        type,
        args: {
            PacketID:   { type: new GraphQLNonNull(GraphQLInt) },
            DeviceID:  { type: new GraphQLNonNull(GraphQLString) },
            Name:{ type: new GraphQLNonNull(GraphQLString) },
            Message:{ type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: otapcommand.createEntry.bind(otapcommand)
    },
    updateotapcommand: {
        type,
        args: {
            // ID:     { type: GraphQLID },
            // DeviceType:   { type:new GraphQLNonNull(GraphQLString) },
            // IsActive:  { type: new GraphQLNonNull(GraphQLBoolean) },
        },
        resolve: otapcommand.updateEntry.bind(otapcommand)
    }
}