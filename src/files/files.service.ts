import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {
  constructor(private readonly prisma: PrismaService) { }

  create(createFileDto: CreateFileDto) {
    return this.prisma.arquivos.create({ data: createFileDto});
  }

  findAll() {
    return this.prisma.arquivos.findMany();
  }

  findOne(id: string) {
    return this.prisma.arquivos.findUnique({ where: { id }});
  }

  update(id: string, updateFileDto: UpdateFileDto) {
    return this.prisma.arquivos.update({
      where: { id },
      data: updateFileDto
    });
  }

  remove(id: string) {
    return this.prisma.arquivos.delete({ where: { id }});
  }
}
