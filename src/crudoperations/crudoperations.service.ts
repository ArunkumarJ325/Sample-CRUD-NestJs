import { Injectable } from '@nestjs/common';
import { CreateCrudoperationDto } from './dto/create-crudoperation.dto';
import { UpdateCrudoperationDto } from './dto/update-crudoperation.dto';
import {Crudoperation}  from './entities/crudoperation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CrudoperationsService {
  constructor(@InjectRepository(Crudoperation) 
  private readonly crudoperationRepository: Repository<Crudoperation>){}

  create(createCrudoperationDto: CreateCrudoperationDto) {
    return this.crudoperationRepository.save(createCrudoperationDto);
    
  }

  findAll(): Promise<Crudoperation[]> {
    return this.crudoperationRepository.find();
  }
  findOne(id: number) {
    return `This action returns a #${id} crudoperation`;
  }

  update(id: number, updateCrudoperationDto: UpdateCrudoperationDto) {
    return `This action updates a #${id} crudoperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudoperation`;
  }
}
