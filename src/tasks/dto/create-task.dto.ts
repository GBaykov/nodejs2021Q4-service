import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  userId?: string | null;

  @IsOptional()
  @IsString()
  boardId: string | null;

  @IsOptional()
  @IsString()
  columnId?: string | null;
  }
