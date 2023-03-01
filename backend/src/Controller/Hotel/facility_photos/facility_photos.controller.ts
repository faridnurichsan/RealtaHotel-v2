import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
  UploadedFiles,
  Res,
  UploadedFile,
} from '@nestjs/common';
// import { UseInterceptors } from '@nestjs/common/decorators/core/use-interceptors.decorator';
// import { UploadedFiles } from '@nestjs/common/decorators/http/route-params.decorator';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
// import { diskStorage } from 'multer';
import { diskStorage } from 'multer';
import { UploadConfig } from 'src/Service/Hotel/Middleware/upload.config';
import { FacilityPhotosService } from 'src/Service/Hotel/facility_photos/facility_photos.service';

@Controller('facility-photos')
export class FacilityPhotosController {
  constructor(private FaphoService: FacilityPhotosService) {}

  @Get()
  getFapho() {
    return this.FaphoService.findAllFapho();
  }
  @Get(`src/:filename`)
  getPhoto(@Param('filename') filename: string, @Res() res) {
    return res.sendFile(filename, {
      root: join('src', 'Service', 'Hotel', 'Uploads'),
    });
  }
  @Get(':id')
  getFaphoId(@Param('id') id) {
    return this.FaphoService.findByFaphoId(id);
  }
  @Put(':id')
  UpdateFapho(@Param('hotelId') hotelId: any, @Body() body: any) {
    return this.FaphoService.UpdateFapho(hotelId, body);
  }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  addFapho(@UploadedFiles() file: any, @Body() body: any) {
    return this.FaphoService.addNewFapho(file, body);
  }

  // @Post()
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: UploadConfig.storage,
  //       filename: UploadConfig.customFileName,
  //     }),
  //   }),
  // )
  // async addFapho(@UploadedFile() file: any, @Body() body: any) {
  //   console.log();

  //   return this.FaphoService.addNewFapho(file, body);
  // }

  @Delete()
  DeleteFapho(@Param('id') params) {
    return this.FaphoService.deleteFapho(params);
  }
}
