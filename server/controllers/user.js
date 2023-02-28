import db from '../services/db.js';

let results = [];
export const getUsers = async (req, res) => {
    try {
        console.log('########## getUsers #################');
        let conn = await db.connect();
        const [rows,] = await conn.query("SELECT * FROM users;");
        conn.end();
    
        console.log('results: ' + JSON.stringify(results));
        results = rows;
        console.log("Results: " + JSON.stringify(results));
        return res.status(200).json(results);
    }
    catch (error) {
        if(conn) conn.end();
        res.status(404).json(error);        
    }
};