import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseFilters,
} from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { USE_FASTIFY } from '../common/config';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileService } from './file.service';



// @UseGuards(JwtAuthGuard)
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  async uploadFile(
    @Req() req: Request | FastifyRequest,
    @Res() res: Response | FastifyReply,
  ) {
    if (USE_FASTIFY === 'true') {
      return this.fileService.uploadByFastify(req as FastifyRequest,res as FastifyReply);
    } 
      return this.fileService.uploadByExpress(req as Request,res as Response);
    
  }

  @Get(':filename')
  download(@Param('filename') filename: string) {
    return this.fileService.download(filename);
  }
}
