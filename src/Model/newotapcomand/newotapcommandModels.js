// const db=require('./db')

//  exports.findOne = (req, res) => {
//     db.findById(req.query.DeviceId, (err, getdata) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found Customer with id ${req.query.DeviceId}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Error retrieving Customer with id " + req.query.DeviceId
//           });
//         }
//       } else res.send(getdata);
//     });
//   };

// class Otapcommand extends db {

//     //  Overrides TABLE_NAME with this class' backing table at MySQL
//     static get TABLE_NAME() {
//         return 'otapcommand'
//     }

//      // Returns a device by its ID
//     static async findById(_, {DeviceID}) {
//         return await this.find(DeviceID)
//     }
// }
// module.exports=Otapcommand

const dbqueries=require('./db');
const mysqlwrapper=require('../../config/mysqlwrapper')

class otapcomand extends dbqueries {

    //  Overrides TABLE_NAME with this class' backing table at MySQL
    static get TABLE_NAME() {
        return 'otapcommand'
    }

     // Returns a device by its ID
    static async getByID(_, {DeviceID}) {
        return await this.findById(DeviceID)
    }
}
module.exports=otapcomand
