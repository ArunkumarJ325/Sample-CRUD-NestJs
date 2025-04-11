import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudoperationDto } from './create-crudoperation.dto';

export class UpdateCrudoperationDto extends PartialType(CreateCrudoperationDto) {}
