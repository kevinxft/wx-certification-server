import {
  Entity,
  Index,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeUpdate,
} from 'typeorm'

@Entity('weapp')
export class WeappEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  @Index({ unique: true })
  appid: string

  // TODO: 加密保存
  @Column()
  secret: string

  @Column({ default: '' })
  desc: string

  @CreateDateColumn()
  created: Date

  @UpdateDateColumn()
  updated: Date
}
