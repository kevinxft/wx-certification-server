import { Entity, Column, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm'

@Entity()
export class WeappEntity {
  @PrimaryGeneratedColumn()
  _id: number

  @Column()
  name: string

  @Column()
  appid: string

  @Column()
  secret: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date()
  }
}
