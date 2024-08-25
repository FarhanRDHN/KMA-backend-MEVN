import bcrypt from 'bcryptjs';
import { findUserByUsername, createUser } from '../models/userModel.js';

export const loginUser = (req, res) => {
    const { username, password } = req.body;

    findUserByUsername(username, (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (!user) return res.status(400).json({ message: 'User not found' });

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: 'Server error' });
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

            res.json({ data: user.name });
        });
    });
};


export const registerUser = (req, res) => {
    const { username, password, name } = req.body;

    findUserByUsername(username, (err, user) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (user) return res.status(400).json({ message: 'Username already exists' });

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return res.status(500).json({ message: 'Server error' });

            createUser(username, hashedPassword, name, (err, userId) => {
                if (err) return res.status(500).json({ message: 'Server error' });
                res.json({ message: 'User registered successfully', userId });
            });
        });
    });
};
