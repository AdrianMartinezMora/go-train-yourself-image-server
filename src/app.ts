import express from "express";
import morgan from "morgan";
import cors from 'cors';


const app = express();

import indexRoutes from './routes/index'

//settings
cors({origin:true})

app.set('port',process.env.PORT || 4000)

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use('/api', indexRoutes)

//this folder is the public folder to upload images
app.use('/uploads',express.static('uploads'));

export default app;