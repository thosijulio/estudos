import { Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config();

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => res.status(200).send('ooook'))

app.listen(3001, () => { console.log('aqui') });
