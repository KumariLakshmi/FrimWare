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
const Otapcommand = require('./otapcommandModels')

// Defines the mutations
module.exports = {
    addotapcommand: {
        type,
        args: {
            // DeviceType:   { type: new GraphQLNonNull(GraphQLString) },
            // IsActive:  { type: new GraphQLNonNull(GraphQLBoolean) },
            PacketID:{ type: new GraphQLNonNull(GraphQLInt) },
            DeviceID:{ type: new GraphQLNonNull(GraphQLString) },
            Name:{ type: new GraphQLNonNull(GraphQLString) },
            Message:{ type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: Otapcommand.createEntry.bind(Otapcommand)
    },
    updateotapcommand: {
        type,
        args: {
            ID:     { type: GraphQLInt },
            // DeviceType:   { type:new GraphQLNonNull(GraphQLString) },
            // IsActive:  { type: new GraphQLNonNull(GraphQLBoolean) },
        },
        resolve: Otapcommand.updateEntry.bind(Otapcommand)
    }
}