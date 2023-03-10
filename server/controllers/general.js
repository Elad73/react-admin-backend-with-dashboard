import db from '../services/db.js';

let results = [];
export const getUser = async (req, res) => {
    try{
        console.log('########## Inside getUser ##########');
        const { id } = req.params;
        let conn = await db.connect();
        const [rows,] = await conn.query(`SELECT * FROM users WHERE uid = ${id}`);
        conn.end();

        results = rows;

        console.log("Results: " + JSON.stringify(results));
        return res.status(200).json(results[0]);
    }
    catch (error) {
        if(conn) conn.end();
        res.status(404).json(error);        
    }
};



