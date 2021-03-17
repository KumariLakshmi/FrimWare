let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Otapcommand',
    description: 'a Otapcommand',
    fields: {
        ID:{            
            type: new GraphQLNonNull(GraphQLInt)
                },
        PacketID:{            
            type: new GraphQLNonNull(GraphQLInt)
                },
        DeviceID: {
            type: new GraphQLNonNull(GraphQLString)
        },

        Name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        Message:{
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})