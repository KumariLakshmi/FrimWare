const { GraphQLObjectType } = require('graphql')


const deviceQueres=require('../Model/devicetype/queriesModels')
const DevicepacketsummaryQuery=require('../Model/fdadevicepacketsummary/queriesModels')
const firmwaredetailcQuery=require('../Model/firmwaredetailC/queriesModels')
const firmwaredetailjavaQuery=require('../Model/firmwaredetailjava/queriesModels')
const devicefirmwareinfoQuery=require('../Model/devicefirmwareinfo/queriesModels')
const devicemasterQuery=require('../Model/devicemaster/queriesModels')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Device:deviceQueres.device,
        DeviceType: deviceQueres.devicetype,
        devicepacket:DevicepacketsummaryQuery.devicepacket,
        // summarypacket:DevicepacketsummaryQuery.packetsummary,
        DetailC:firmwaredetailcQuery.firmwaredetailC,
        // firmwaredetailC:firmwaredetailcQuery.detailC
        Javadetail:firmwaredetailjavaQuery.firmwaredetailJava,
        // firmwaredetailjava:firmwaredetailjavaQuery.detailJava
        Deviceinfo:devicefirmwareinfoQuery.devicefirmwareinfo,
        // devicefirmwareinfo:devicefirmwareinfoQuery.deviceinfo
        DeviceMaster:devicemasterQuery.devicemaster,
        // devicemaster:devicemasterQuery.devicedMaster

    }
})