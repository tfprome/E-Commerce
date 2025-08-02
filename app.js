import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import ratelimit from 'express-rate-limit'
import mongoose from 'mongoose'
import cookieParser from'cookie-parser';


import { DATABASE, MAX_JSON_SIZE,REQUEST_NUMBER,REQUEST_TIME,URL_ENCODED, WEB_CACHE,PORT } from './app/config/config.js'
import router from './routes/routes.js'

const app=express();


app.use(cors())
app.use(express.json({limit:MAX_JSON_SIZE}))
app.use(helmet())
app.use(express.urlencoded({extended:URL_ENCODED}))
app.use(cookieParser());


const limiter=ratelimit({WindowMs:REQUEST_TIME,max:REQUEST_NUMBER})
app.use(limiter)
app.set('etag',WEB_CACHE)


mongoose.connect(DATABASE, {})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// 1. Mongodb atlas new gmail 
2. 


app.use('/api',router)
app.use(express.static('/client/dist'))
app.get('*',function(req,res){
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})

