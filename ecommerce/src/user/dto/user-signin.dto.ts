import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserSignIn{
    @IsNotEmpty({message:'Email can not be empty'})
    @IsEmail({},{message: 'Please provide a valid email'})
    email: string;
   
    @IsNotEmpty({message:'Name can not be empty'})
    @MinLength(5,{message: 'Password minimum character should be 5'})
    password:string;
}