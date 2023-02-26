import getConn from '../config/mysql.js'

export const getUser = (req, res) => {
    console.log('Inside getUser');
    const conn = getConn('users');
    try {
        const { id } = req.params;
        const query = `SELECT * FROM users WHERE uid = ${id}`;
        const user =  conn.query(query, (err, result) => {
            if (err) { console.log(err); }
            if (result) {
                console.log(result[0]);

                res.status(200).json(result[0]);
            }
            res.status(200).json({});
        });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
