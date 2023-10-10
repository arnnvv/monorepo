// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import {Admin} from "db";

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

type Data = {
  token: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const admin = Admin.findOne({ username: req.user.username });
    function callback(admin) {
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
    Admin.findOne({ username }).then(callback);
  });
  res.status(200).json({ token: "Arnav" });
}
