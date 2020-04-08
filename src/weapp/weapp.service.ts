import { Injectable } from '@nestjs/common'
import { WeappEntity } from './weapp.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class WeappService {
  constructor(
    @InjectRepository(WeappEntity)
    private readonly weappEntity: Repository<WeappEntity>,
  ) {}

  async findAll(): Promise<any> {
    return 'findAll'
  }

  async create(form): Promise<any> {
    return form
  }

  async update(form): Promise<any> {
    return form
  }
}
