import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createFileDto: CreateFileDto) {
    return await this.prisma.arquivos.create({ data: createFileDto});
  }

  async findAll() {
    return await this.prisma.arquivos.findMany();
  }

  async findOne(id: string) {
    const file = await this.prisma.arquivos.findUnique({ where: { id }});

    if (!file) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }

    return file;
  }

  update(id: string, updateFileDto: UpdateFileDto) {
    const file = this.prisma.arquivos.update({
      where: { id },
      data: updateFileDto
    });

    if (!file) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }

    return file;
  }

  remove(id: string) {
    const file = this.prisma.arquivos.delete({ where: { id }});

    if (!file) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }

    return file;
  }
}
