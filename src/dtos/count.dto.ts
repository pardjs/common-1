import { ApiProperty } from '@nestjs/swagger';

export class CountResDto {
  @ApiProperty()
  public count!: number;
}
