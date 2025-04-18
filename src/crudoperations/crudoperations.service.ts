import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCrudoperationDto } from './dto/create-crudoperation.dto';
import { UpdateCrudoperationDto } from './dto/update-crudoperation.dto';
import { Crudoperation } from './entities/crudoperation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CrudoperationsService {
  constructor(
    @InjectRepository(Crudoperation)
    private readonly crudoperationRepository: Repository<Crudoperation>,
  ) {}

  async create(createCrudoperationDto: CreateCrudoperationDto): Promise<Crudoperation> {
    return await this.crudoperationRepository.save(createCrudoperationDto);
  }

  async findAll(): Promise<Crudoperation[]> {
    return await this.crudoperationRepository.find();
  }

  async findOne(id: number): Promise<Crudoperation> {
    const operation = await this.crudoperationRepository.findOne({ where: { id } });
    if (!operation) {
      throw new NotFoundException(`Crudoperation with ID ${id} not found`);
    }
    return operation;
  }

  async update(id: number, updateCrudoperationDto: UpdateCrudoperationDto): Promise<Crudoperation> {
    const operation = await this.findOne(id); // reuse findOne to check existence
    const updated = Object.assign(operation, updateCrudoperationDto);
    return await this.crudoperationRepository.save(updated);
  }

  async remove(id: number): Promise<string> {
    const operation = await this.findOne(id); // check existence
    await this.crudoperationRepository.remove(operation);
    return `Crudoperation with ID ${id} has been deleted successfully`;
  }
}
