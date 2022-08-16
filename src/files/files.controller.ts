import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FileEntity } from './entities/file.entity';

@ApiTags('Arquivos')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @ApiCreatedResponse({ type: FileEntity })
  async create(@Body() createFileDto: CreateFileDto) {
    return new FileEntity(await this.filesService.create(createFileDto));
  }

  @Get()
  @ApiOkResponse({ type: [FileEntity] })
  async findAll() {
    const files = await this.filesService.findAll();
    return files.map((file) => new FileEntity(file));
  }

  @Get(':id')
  @ApiOkResponse({ type: FileEntity })
  async findOne(@Param('id') id: string) {
    return await this.filesService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FileEntity })
  async update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return new FileEntity(await this.filesService.update(id, updateFileDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: FileEntity })
  async remove(@Param('id') id: string) {
    return new FileEntity(await this.filesService.remove(id));
  }
}
