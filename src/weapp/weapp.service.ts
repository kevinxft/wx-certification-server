import { Injectable } from '@nestjs/common'
import { WeappEntity } from './weapp.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { getRepository } from 'typeorm'
import { Repository } from 'typeorm'
import { CreateWeappDto } from './dto'

@Injectable()
export class WeappService {
  constructor(
    @InjectRepository(WeappEntity)
    private readonly weappEntity: Repository<WeappEntity>,
  ) {}

  async findAll(): Promise<any> {
    const res = await this.weappEntity.find({})
    console.log(Array.isArray(res))
    return res
  }

  async create(form: CreateWeappDto): Promise<WeappEntity> {
    const weapp = new WeappEntity()
    weapp.name = form.name
    weapp.appid = form.appid
    weapp.secret = form.secret
    weapp.desc = form.desc
    const newWeapp = await this.weappEntity.save(weapp)
    return newWeapp
  }

  async update(form): Promise<any> {
    return form
  }
}
