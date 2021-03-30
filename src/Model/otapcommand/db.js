const mysql= require('../../config/mysqlwrapper');
class dbqueries {
static findById(DeviceID,result){
     mysql.query=`SELECT * FROM otapcommand WHERE DeviceID IN (${DeviceID})`
    let params=[this.TABLE_NAME]

    return mysql.createQuery({
        // baseQuery,
        params
    })
}
}
module.exports=dbqueries











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