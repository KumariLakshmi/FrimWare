// const db=require('../../config/mysqlconnect');


// const otapcommand=function(otapcommand){
//     this.PacketID=otapcommand.PacketID,
//     this.DeviceID=otapcommand.DeviceID,
//     this.Name=otapcommand.Name,
//     this.Message=otapcommand.Message
// }

// otapcommand.create=(newotapcommand,result)=>{
// db.query("INSERT INTO otapcommand SET ?",newotapcommand, (err, res) => {
//     if (err) {
//       console.log("error", err);
//     }

//     console.log("created customer: ", { id: res.insertId, ...newotapcommand });
//     result(null, { id: res.insertId, ...newotapcommand });
//   });
// },
// otapcommand.findById = (DeviceID, result) => {
//     db.query(`SELECT * FROM otapcommand WHERE ID IN (${DeviceID})`, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//       }
  
//       else 
//       {
//         console.log("otapcomand: ", res);
//       }
  
//       // not found Customer with the id
//       result( "not found otapcommand", null);
//     });
//   };
//   module.exports=otapcommand
const mysql= require('../../config/mysqlwrapper');
class dbqueries {
static findById(DeviceID,result){
    let baseQuery=`SELECT * FROM otapcommand WHERE DeviceID IN (${DeviceID})`
    let params=[this.TABLE_NAME]

    return mysql.createQuery({
        baseQuery,
        params
    })
}
}
module.exports=dbqueries