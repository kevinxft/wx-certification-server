import { Controller, Post, Get, Query, Body } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('cert')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/access_token')
  async getAccessTokenPost(@Body() body): Promise<any> {
    const { appid, secret } = body
    const res = await this.appService.getAccessToken(appid, secret)
    return res
  }
  
  @Get('/access_token')
  async getAccessToken(@Query() query): Promise<any> {
    const { appid, secret } = query
    const res = await this.appService.getAccessToken(appid, secret)
    return res
  }

  @Get('/ticket')
  async getTicket(@Query() query): Promise<any> {
    const { accessToken } = query
    const res = await this.appService.getTicket(accessToken)
    return res
  }

  @Post('/ticket')
  async getTicketPost(@Body() body): Promise<any> {
    const { accessToken } = body
    const res = await this.appService.getTicket(accessToken)
    return res
  }

  @Get('/ticket_direct')
  async getTickDirect(@Query() query): Promise<any> {
    const { appid, secret } = query
    const res = await this.appService.getTicketDirect(appid, secret)
    return res
  }

  @Post('/ticket_direct')
  async getTickDirectPost(@Body() body): Promise<any> {
    const { appid, secret } = body
    const res = await this.appService.getTicketDirect(appid, secret)
    return res
  }
}
