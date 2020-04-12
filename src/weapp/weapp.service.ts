import { Injectable, HttpStatus, HttpException } from '@nestjs/common'
import { WeappEntity } from './weapp.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, DeleteResult } from 'typeorm'
import { CreateWeappDto } from './dto'
import { WeappsRes } from './weapp.interface'

@Injectable()
export class WeappService {
  constructor(
    @InjectRepository(WeappEntity)
    private readonly weappEntity: Repository<WeappEntity>,
  ) {}

  async findAll(): Promise<WeappsRes> {
    const res = await this.weappEntity.find({})
    return {
      data: res,
      count: res.length,
    }
  }

  async findOne(appid: string): Promise<WeappEntity> {
    const weapp: WeappEntity = await this.weappEntity.findOne({ appid })
    return weapp
  }

  async create(form: CreateWeappDto): Promise<WeappEntity> {
    try {
      const weapp = new WeappEntity()
      weapp.name = form.name
      weapp.appid = form.appid
      weapp.secret = form.secret
      weapp.desc = form.desc
      const newWeapp = await this.weappEntity.save(weapp)
      return newWeapp
    } catch (error) {
      const message = error.toString().includes('Duplicate entry')
        ? '该appid已经注册'
        : error.toString()
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message,
        },
        400,
      )
    }
  }

  async update(id: number, form: any): Promise<WeappEntity> {
    const toUpdate = await this.weappEntity.findOne({ where: { id } })
    const updated = Object.assign(toUpdate, form)
    const weapp = await this.weappEntity.save(updated)
    return weapp
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.weappEntity.delete({ id })
  }
}
