import { IsOptional, IsString, MinLength } from "class-validator";

export class createProductDTO {

    @IsString()
    @MinLength(3 , {message: "should not be less than 3 characters"})
    name: string;

    @IsString()
    description: string ;

    @IsOptional()
    @IsString()
    quantity?: number ;

    @IsString()
    price: number ;

    @IsString()
    category: string ;

}