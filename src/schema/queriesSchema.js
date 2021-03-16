const { GraphQLObjectType } = require('graphql')


const deviceQueres=require('../Model/devicetype/queriesModels')
const DevicepacketsummaryQuery=require('../Model/fdadevicepacketsummary/queriesModels')
const firmwaredetailcQuery=require('../Model/firmwaredetailC/queriesModels')
const firmwaredetailjavaQuery=require('../Model/firmwaredetailjava/queriesModels')
const devicefirmwareinfoQuery=require('../Model/devicefirmwareinfo/queriesModels')
const devicemasterQuery=require('../Model/devicemaster/queriesModels')
const fdadevicereportingstatusQuery=require('../Model/fdadevicereportingstatus/queriesModels')
const otapcommandQuery=require('../Model/otapcommand/queriesModels')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Device:deviceQueres.device,
        devicetype: deviceQueres.devicetype,
        devicepacket:DevicepacketsummaryQuery.devicepacket,
        // summarypacket:DevicepacketsummaryQuery.packetsummary,
        detailC:firmwaredetailcQuery.detailC,
        // firmwaredetailC:firmwaredetailcQuery.firmwaredetailC,
        detailJava:firmwaredetailjavaQuery.detailJava,
        // firmwaredetailjava:firmwaredetailjavaQuery.firmwaredetailjava,
        deviceInfo:devicefirmwareinfoQuery.deviceInfo,
        // devicefirmwareinfo:devicefirmwareinfoQuery.devicefirmwareinfo,
        devicemaster:devicemasterQuery.devicemaster,
        // devicemaster:devicemasterQuery.devicedMaster,
        reportingstatus:fdadevicereportingstatusQuery.reportingstatus,
        // fdadevicereportingstatus:fdadevicereportingstatusQuery.fdadevicereportingstatus,
        otapcammand:otapcommandQuery.otapcommand,
        // command:otapcommandQuery.command


    }
})