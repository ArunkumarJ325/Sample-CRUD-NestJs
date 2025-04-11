import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudoperationsService } from './crudoperations.service';
import { CreateCrudoperationDto } from './dto/create-crudoperation.dto';
import { UpdateCrudoperationDto } from './dto/update-crudoperation.dto';

@Controller('crudoperations')
export class CrudoperationsController {
  constructor(private readonly crudoperationsService: CrudoperationsService) {}

  @Post()
  create(@Body() createCrudoperationDto: CreateCrudoperationDto) {
    return this.crudoperationsService.create(createCrudoperationDto);
  }

  @Get()
  findAll() {
    return this.crudoperationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudoperationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudoperationDto: UpdateCrudoperationDto) {
    return this.crudoperationsService.update(+id, updateCrudoperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudoperationsService.remove(+id);
  }
}
