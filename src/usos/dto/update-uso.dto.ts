import { PartialType } from '@nestjs/mapped-types';
import { CreateUsoDto } from './create-uso.dto';

export class UpdateUsoDto extends PartialType(CreateUsoDto) {}
