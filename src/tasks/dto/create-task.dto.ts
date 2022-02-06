import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateTaskDto {

  @IsString()
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  @IsInt()
  order: number 

    @IsString()
    @IsNotEmpty()
    description: string

    @IsOptional()
    @IsUUID()
    userId: string | null

    @IsOptional()
    @IsUUID()
    boardId: string | null

    @IsOptional()
    @IsUUID()
    columnId: string | null;
  }
