import { IsString, IsNotEmpty, IsInt, Min, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsInt()
    @Min(0)
    age: number;

    // Avatar will be handled by file upload, not the JSON body
    @IsOptional()
    @IsString()
    avatar?: string;
}