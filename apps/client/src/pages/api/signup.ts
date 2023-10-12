// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Admin } from "db";
import express from "express"; // Use 'import' for 'express'
import jwt from 'jsonwebtoken'; // Importing 'jsonwebtoken' after installing type declarations
const SECRET = "SECRET";


const router = express.Router();
type Data = {
    token?: string;
    message?: string;
    name?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log("handler called");
    // await ensureDbConnected()
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
    } else {
        const obj = { username: username, password: password };
        const newAdmin = new Admin(obj);
        newAdmin.save();

        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token });
    }
}
// Use the router middleware in your application to handle the '/signup' route
// Example usage in Next.js:
// app.use('/api', router);
