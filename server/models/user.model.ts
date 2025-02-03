require('dotenv').config();
import mongoose, {Document,Model,Schema} from 'mongoose';
import bcrypt from 'bcryptjs';
import { Jwt } from 'jsonwebtoken';
const emailRegesPattern:RegExp= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export interface IUser extends Document {
    name:string;
    email:string;
    password:string;
    avatar:{
        public_id:string;
        url:string;
    };
    role:string;
    isVerified:boolean;
    courses:Array<{courseId:string}>;
    comparePassword(candidatePassword:string): Promise<boolean>;
    SignAccessToken:()=>string;  
    SignRefreshToken:()=>string;

}

const userSchema : Schema<IUser>= new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter your name"],
        },
        email:{
            type:String,
            required:[true,"Please enter your email address"],
            validate:{
                validator:function(value:string){
                    return emailRegesPattern.test(value);
                },
                message:"Please enter a valid email address"
            },
            unique:true,
            
        },
        password:{
            type:String,
            required:[true,"Please enter a password"],
            minlength:[8,"Password must be at least 8 characters long"],
            select:false
        },
        avatar:{
            public_id:String,
            url:String
        },
        role:{
            type:String,
            default:'user'
        },
        isVerified:{
            type:Boolean,
            default:false
        },
        courses:{
            type:[{courseId:String}],
        }
    },
    {timestamps:true}
);

userSchema.pre<IUser>('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const hashedPassword:string=await bcrypt.hash(this.password,10);
    this.password=hashedPassword;
    next();
});

userSchema.methods.comparePassword=async function(enteredPassword:string): Promise<boolean>{
    return await bcrypt.compare(enteredPassword,this.password);
};

const userModel:Model<IUser> = mongoose.model('User',userSchema);
export default userModel;