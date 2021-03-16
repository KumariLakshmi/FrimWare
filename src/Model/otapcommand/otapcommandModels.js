const dbqueries=require('../../config/dbqueries')
const mysqlwrapper=require('../../config/mysqlwrapper')

class otapcommand extends dbqueries {

    //  Overrides TABLE_NAME with this class' backing table at MySQL
    static get TABLE_NAME() {
        return 'otapcommand'
    }

     // Returns a device by its ID
    static async getByID(_, {PacketID}) {
        return await this.find(PacketID)
    }

    /**
     * Returns a list of device  matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all device if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching device
        return this.findByFields({
            fields
        })
    }
    // Creates a new device mutations for update 

    static async createEntry(_, {PacketID,DeviceID,Name,Message}) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    // type,
                    // price
                     PacketID,DeviceID,Name,Message
                }
            })

            return this.getByID(_, {PacketID: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a device
     */
    static async updateEntry(_, {ID, type, price}) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                ID,
                data: {
                    type,
                    price
                }
            })

            return this.getByID(_, {ID})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = otapcommand