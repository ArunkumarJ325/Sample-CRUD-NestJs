import { Module } from '@nestjs/common';
import { CrudoperationsService } from './crudoperations.service';
import { CrudoperationsController } from './crudoperations.controller';
import {Crudoperation}  from './entities/crudoperation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Crudoperation]),
  ],
  controllers: [CrudoperationsController],
  providers: [CrudoperationsService],
})
export class CrudoperationsModule {}
