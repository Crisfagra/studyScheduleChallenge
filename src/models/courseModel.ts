import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  desiredCourse: string

  @Column()
  requiredCourse: string
}
