const { GraphQLObjectType } = require('graphql')
// const deviceMutation=require('../Model/devicetype/mutationsModels')
const otapcommandMutation=require('../Model/otapcommand/mutationsModels')

module.exports= new GraphQLObjectType({
    name:'RootMutationsType',
    fields:{
        addotapcommand:otapcommandMutation.addotapcommand,
        updateotapcommand:otapcommandMutation.updateotapcommand
    }
}) 
