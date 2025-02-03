import { NextFunction,Request,Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware =(err:any,req:Request,res:Response,next:NextFunction)=>{
    err.status=err.statusCode || 500;
    err.message=err.message || 'Internal Server Error';
    //wrong mongodb id error
    if(err.name === 'CastError'){
        const message=`Resource not found. Invalid: ${err.path}`;
        err=new ErrorHandler(message,400);
    }
    //Duplicate key error
    if(err.code === 11000){
        const message=`Duplicate field value entered. Please use another value: ${Object.keys(err.keyValue)}`;
        err=new ErrorHandler(message,400);
    }
    //wrong jwt error
    if(err.name ==='JsonWebtockenError'){
        const message='Invalid token. Please log in again.';
        err=new ErrorHandler(message,400);
    }
    //JWT expired error message
    if(err.name ==='TokenExpiredError'){
        const message='Token expired. Please log in again.';
        err=new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
      success: false,
      message: err.message
    })



    
}