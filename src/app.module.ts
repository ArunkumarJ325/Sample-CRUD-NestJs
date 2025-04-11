import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudoperationsModule } from './crudoperations/crudoperations.module';
import {Crudoperation}  from './crudoperations/entities/crudoperation.entity';

import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'pass@word1',
    database: 'curd',
    entities: [Crudoperation],
    synchronize: true,
  }),
  CrudoperationsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
