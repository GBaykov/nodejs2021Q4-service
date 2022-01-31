import { PartialType } from '@nestjs/mapped-types';
import { Column, CreateBoardDto } from './create-board.dto';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {
    title?: string;
    columns?: Column[] | null;
}
