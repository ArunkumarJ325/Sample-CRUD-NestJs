import { IsDate, isNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCrudoperationDto {

    @IsString()
    fullname: String;
    @IsString()
    email: String;
   
    @IsDate()
    DateOfBirth : Date;
    
}
