import { Controller, Body, Post, Get, Query, Put, Param, Delete } from '@nestjs/common'
import { WeappService } from './weapp.service'
import { CreateWeappDto } from './dto'

@Controller('weapp')
export class WeappController {
  constructor(private readonly weappService: WeappService) {}

  @Post()
  async create(@Body() body: CreateWeappDto): Promise<any> {
    return this.weappService.create(body)
  }

  @Get()
  async getWeappList(@Query() query): Promise<any> {
    const res = await this.weappService.findAll()
    return res
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body): Promise<any> {
    const res = await this.weappService.update(id, body)
    return res
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    const res = await this.weappService.delete(id)
    return res
  }
}
