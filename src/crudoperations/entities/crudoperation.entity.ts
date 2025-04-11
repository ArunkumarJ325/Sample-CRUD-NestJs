
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'personalDetails' })
export class Crudoperation {
        @PrimaryGeneratedColumn()
        id :number;
        @Column()
        fullname: String;
        @Column()       
        email: String;
   
        @Column()      
        DateOfBirth : Date;
}
