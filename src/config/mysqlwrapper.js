const mysqlconnect=require('./mysqlconnect');

module.exports = class mysqlwrapper {

    static createQuery({query, params}) {

        return new Promise((succeed, fail) => {
            mysqlconnect.pool.getConnection((err, connection) => {
                if (err) {
                    return fail(err)
                }

                //Runs the query
                connection.query(query, params, (err, rows) => {
                    connection.release()
                    if (err) {
                        return fail(err)
                    }
                    return succeed(rows)
                })
            })
        })
    }
}