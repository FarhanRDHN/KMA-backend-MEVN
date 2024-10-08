import express from 'express';
import cors from 'cors';
import {loginUser, registerUser } from './controller/authCntroller.js';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors());
app.use(express.json());

app.post('/login', loginUser)
app.post('/register', registerUser)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
