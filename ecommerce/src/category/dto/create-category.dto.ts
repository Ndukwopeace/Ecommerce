import { IsString, Max, MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @MaxLength(10 , {message: "should not be more than 10 characters"})
    name: string;

    @IsString()
    @MaxLength(50 , {message: "should not be more than 50 characters"})
    @MinLength(10 , {message: "should not be atleast than 10 characters"})
    description : string;
}
