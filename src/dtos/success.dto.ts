import { ApiProperty } from '@nestjs/swagger';

export class SuccessDto {
  @ApiProperty()
  public success!: boolean;
}
