import { IsString } from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  readonly name: string;
}
