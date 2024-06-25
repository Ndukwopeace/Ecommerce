import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { UserSignIn } from "./user-signin.dto";

export class UserSignUp extends UserSignIn{
    
    @IsNotEmpty({message:'Name can not be empty'})
    @IsString({message: 'Name should be string'})
    name:string;

}