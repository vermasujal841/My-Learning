import express , {NextFunction,Response,Request} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { ErrorMiddleware } from './middleware/error';
export const app=express();
import userRouter from './routes/user.route'
import courseRouter from './routes/course.route';
import orderRouter from './routes/order.route';
import notificationRoute from './routes/notification.route';
import analyticsRouter from './routes/analytics.route';
import layoutRouter from './routes/layout.route';


require('dotenv').config();


//cookie parser
app.use(cookieParser());

//body parser
app.use(express.json({limit:"50mb"}));
//cors cross origin resource sharing
app.use(cors({origin:process.env.ORIGIN}));

//testing api
app.use('/api/v1',userRouter)
app.use('/api/v1',courseRouter)
app.use('/api/v1',orderRouter)
app.use('/api/v1',notificationRoute)
app.use('/api/v1',analyticsRouter)
app.use('/api/v1',layoutRouter)
app.get('/test',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({
        success:true,
        message:'testing api'
    })
})
//unknown route 
 
app.all("*",(req:Request,res:Response,next:NextFunction)=>{
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.status = 404;
    next(err);
})
app.use(ErrorMiddleware)
//mongodb+srv://vermasujal16:<db_password>@lms.akoq2.mongodb.net/
