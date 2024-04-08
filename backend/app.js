import mongoose from 'mongoose'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { test } from './controllers/user.controllers.js';
dotenv.config()


mongoose.connect(process.env.url)
.then(() => {
    console.log('SI JALO PTM')
})
.catch((err) => {
    console.log('TITE NO JALA UnU')
})

const app = express()
app.use(cors())

app.listen(4000, () => {
    console.log('LA API JALO B)')
})

test()