import db from '../config/db.js';

export const findUserByUsername = (username, callback) => {
    db.query('SELECT * FROM user WHERE username = ?', [username], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};

export const createUser = (username, hashedPassword, name, callback) => {
    db.query('INSERT INTO user (username, password, name) VALUES (?, ?, ?)', 
        [username, hashedPassword, name], 
        (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        }
    );
};