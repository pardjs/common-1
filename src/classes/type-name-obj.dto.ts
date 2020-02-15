import { ApiProperty } from "@nestjs/swagger";

export class TypeNameObjDto {
  @ApiProperty()
  public type!: string;

  @ApiProperty()
  public name!: string;
}
