import { PartialType } from '@nestjs/mapped-types';
import { CreatePcPrearmadaDto } from './create-pc-prearmada.dto';

export class UpdatePcPrearmadaDto extends PartialType(CreatePcPrearmadaDto) {}
