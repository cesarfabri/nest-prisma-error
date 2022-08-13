import { ApiProperty } from '@nestjs/swagger';
import { Arquivos, Prisma } from '@prisma/client'
import { Transform } from 'class-transformer';

export class FileEntity implements Arquivos {
  @ApiProperty()
  id: string;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  update_at: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @Transform(({ value }) => value.toNumber())
  @ApiProperty({ type: String })
  size: Prisma.Decimal;

  @ApiProperty()
  original_name: string;

  @ApiProperty()
  path_url: string;

  constructor(partial: Partial<FileEntity>) {
    Object.assign(this, partial);
  }
}
