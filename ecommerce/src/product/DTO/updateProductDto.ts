import { IsString, MinLength } from "class-validator";

export class updateProductDTO {

    @IsString()
    @MinLength(3 , {message: "should not be less than 3 characters"})
    name: string;

    @IsString()
    description: string ;

    @IsString()
    quantity: number ;

    @IsString()
    category: string ;

    @IsString()
    price: number ;

}