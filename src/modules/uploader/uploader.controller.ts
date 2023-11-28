import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UploaderService } from './uploader.service';

@ApiTags('Uploader')
@Controller('uploader')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

  @Post('/')
  @ApiOperation({ summary: 'Uploader' })
  @ApiOkResponse({
    status: 201,
    description: 'Upload successfully',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['file'],
      properties: {
        filename: {
          type: 'string',
        },
        width: {
          type: 'number',
        },
        height: {
          type: 'number',
        },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    this.uploaderService.uploadFile({ file, ...body });
  }
}
