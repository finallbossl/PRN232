import { IsString, IsNotEmpty, IsOptional, IsEnum, IsDateString, IsNumber, Min } from 'class-validator';
import { RentalStatus } from '../types';

export class CreateRentalDto {
    @IsString()
    @IsNotEmpty()
    motorbikeId: string;

    @IsDateString()
    @IsNotEmpty()
    startDate: string;

    @IsDateString()
    @IsNotEmpty()
    endDate: string;

    @IsString()
    @IsNotEmpty()
    pickupLocation: string;

    @IsString()
    @IsNotEmpty()
    returnLocation: string;

    @IsString()
    @IsOptional()
    notes?: string;
}

export class UpdateRentalStatusDto {
    @IsEnum(RentalStatus)
    @IsNotEmpty()
    status: RentalStatus;
}

export class RentalFilterDto {
    @IsNumber()
    @IsOptional()
    @Min(1)
    page?: number = 1;

    @IsNumber()
    @IsOptional()
    @Min(1)
    limit?: number = 10;

    @IsEnum(RentalStatus)
    @IsOptional()
    status?: RentalStatus;
}
