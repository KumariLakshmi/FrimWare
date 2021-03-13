const { GraphQLObjectType } = require('graphql')
const deviceMutation=require('../Model/devicetype/mutationsModels')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addDevice: deviceMutation.addDevice,
        updateDevice: deviceMutation.updateDevice
    }
})