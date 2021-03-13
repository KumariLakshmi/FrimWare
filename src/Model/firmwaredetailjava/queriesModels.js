const { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
// const mutation = require('./mutations')
const DetailJava=require('./firmwaredetailjavaModels')

// Defines the queries
module.exports = {
    firmwaredetailJava: {
    type: new GraphQLList(type),
    args: {
        Name: {
            type: GraphQLString
        },
        ServerIP: {
            type: GraphQLString
        },
        UserName:{
            type: GraphQLString
        },
        Password:{
            type:  GraphQLString
        }
    
    },
    resolve: DetailJava.findMatching.bind(DetailJava)
},
detailJava: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: DetailJava.getByID.bind(DetailJava)
}
}