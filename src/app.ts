import express from "express";
import morgan from "morgan";
const app = express();

import indexRoutes from './routes/index'

//settings

app.set('port',process.env.PORT || 4000)

// middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/api', indexRoutes)

//this folder is the public folder to upload images
app.use('/uploads',express.static('uploads'));

export default app;