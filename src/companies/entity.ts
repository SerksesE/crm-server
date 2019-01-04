import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IsString } from 'class-validator';

@Entity()
export default class Company extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', { nullable: false })
  name: string

  @IsString()
  @Column('text', { nullable: false })
  adress: string

  @IsString()
  @Column('text', { nullable: false })
  zipcode: string

  @IsString()
  @Column('text', { nullable: false })
  city: string

  @IsString()
  @Column('text', { nullable: false })
  phone: string
}