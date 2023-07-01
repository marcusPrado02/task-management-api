import { IsString, IsInt } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  readonly content: string;

  @IsInt()
  readonly userId: number;
}
