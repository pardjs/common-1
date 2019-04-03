import { ApiModelProperty } from "@nestjs/swagger";

export class TypeNameObjDto {
  @ApiModelProperty()
  public type!: string;

  @ApiModelProperty()
  public name!: string;
}
