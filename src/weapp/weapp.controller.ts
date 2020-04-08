import { Controller, Body, Post, Get } from '@nestjs/common'
import { WeappService } from './weapp.service'

@Controller('weapp')
export class WeappController {
  constructor(private readonly weappService: WeappService) {}

  @Post()
  async createWeapp(@Body() body): Promise<any> {
    console.log(body)
    const res = this.weappService.findAll()
    return res
  }

  @Get()
  async getWeappList(): Promise<any> {
    console.log('list')
    return 'getList'
  }
}
