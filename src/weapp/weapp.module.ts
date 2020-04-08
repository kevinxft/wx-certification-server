import { Module } from '@nestjs/common'
import { WeappController } from './weapp.controller'
import { WeappService } from './weapp.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WeappEntity } from './weapp.entity'

@Module({
  imports: [TypeOrmModule.forFeature([WeappEntity])],
  providers: [WeappService],
  controllers: [WeappController],
})
export class WeappModule {}
