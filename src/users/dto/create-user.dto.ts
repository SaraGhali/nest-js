import { IsString, IsNotEmpty, IsInt, Min, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'First name is required' })
    firstName: string;


    @IsString()
    @IsNotEmpty({ message: 'Last name is required' })
    lastName: string;

    @IsInt()
    @Min(0)
    age: number;

    // Avatar will be handled by file upload, not the JSON body
    @IsOptional()
    @IsString()
    avatar?: string;
}