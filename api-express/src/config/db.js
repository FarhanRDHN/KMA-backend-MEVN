
import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

export default db;