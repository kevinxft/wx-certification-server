import { Controller, Body, Post, Get, Query } from '@nestjs/common'
import { WeappService } from './weapp.service'
import { CreateWeappDto } from './dto'

@Controller('weapp')
export class WeappController {
  constructor(private readonly weappService: WeappService) {}

  @Post()
  async create(@Body() body: CreateWeappDto): Promise<any> {
    console.log(body)
    return this.weappService.create(body)
  }

  @Get()
  async getWeappList(@Query() query): Promise<any> {
    const res = await this.weappService.findAll()
    return res
  }
}
