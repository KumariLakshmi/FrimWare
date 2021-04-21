import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const Otherotapcommand = require('./otherotapcommandModels')

// Defines the queries
module.exports = {
    otherotapcommand: {
    type: new GraphQLList(type),
    Customer: {
        type: GraphQLString
    },
    NetworkProvider: {
        type: GraphQLString
    },
    MobileNo: {
        type: GraphQLInt
    },
    // VehicleTypeName: {
    //     type: GraphQLInt
    // },
    // CurrentCVersion: {
    //     type: GraphQLInt
    // },
    // CurrentJavaVersion: {
    //     type: GraphQLInt
    // },
    // Ignition: {
    //     type: GraphQLString
    // },
    resolve: Otherotapcommand.findMatching.bind(Otherotapcommand)
},
// const otapType = new GraphQLObjectType({
//     name: 'otap',
//     args: {
//       DeviceID: new GraphQLList(GraphQLString)
//     },
//   });
otapcommand: {
    type:new GraphQLList(type),
    args: {
        // DeviceID:new GraphQLList(GraphQLString)
        DeviceID: {
            type: new GraphQLList(GraphQLString)
        },
        
        DeviceType:{
            type:new GraphQLList(GraphQLString)
          }
         
    },
    resolve: Otherotapcommand.findMatching.bind(Otherotapcommand)
},
otapcommandDeviceID: {
    type,
    args: {
        DeviceID: {
            type: GraphQLString
        }
    },
    resolve: Otherotapcommand.getByDeviceID.bind(Otherotapcommand)
}
}