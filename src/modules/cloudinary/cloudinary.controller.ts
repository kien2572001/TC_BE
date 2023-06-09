import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/decorator/public.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('API upload file')
@Controller('upload-cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Public()
  @Post('/image')
  @ApiOperation({ summary: 'Upload image' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadImageToCloudinary(file);
  }

  @Public()
  @Post('/image-tmp')
  @ApiOperation({ summary: 'Upload image tmp' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFileTmp(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadImageToCloudinaryTmp(file);
  }

  @Public()
  @Delete('/image/:publicId')
  @ApiOperation({
    summary:
      'Delete image by id ( Dang bao tri tai chua tim dc publicId cua image )',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteFile(@Param() param) {
    console.log(param);
    return this.cloudinaryService.deleteImage(param);
  }
}
