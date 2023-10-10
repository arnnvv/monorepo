// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Admin } from "db";
const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();

type Data = {
  token?: string;
  message?: string;
};

// Define your signup route outside of the handler
router.post('/signup', (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { username, password } = req.body;

  // Check if an admin with the same username already exists
  Admin.findOne({ username }).then((admin) => {
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      // Create a new admin if not already exists
      const obj = { username, password };
      const newAdmin = new Admin(obj);
      newAdmin.save();

      // Sign a JWT token for authentication
      const SECRET = 'your_secret_key_here'; // Replace with your actual secret key
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Admin created successfully', token });
    }
  });
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
  res.status(200).json({ token: "Arnav" });
}

// Use the router middleware in your application to handle the '/signup' route
// Example usage in Next.js:
// app.use('/api', router);
