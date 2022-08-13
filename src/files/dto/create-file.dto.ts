import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, Min, MinLength } from "class-validator";

export class CreateFileDto {
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @MaxLength(20)
  @ApiProperty()
  type: string;

  @Min(1.0)
  @ApiProperty()
  size: number;

  @IsNotEmpty()
  @ApiProperty()
  original_name: string;

  @IsNotEmpty()
  @ApiProperty()
  path_url: string;
}