import {
  Controller,
  Post,
  Get,
  Query,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
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
    const { appid } = query
    const res = await this.appService.getTicketDirect(appid)
    console.log('res', res)
    if (res) {
      return res
    }
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        message: 'appid未在本系统内注册',
      },
      400,
    )
  }

  @Post('/ticket_direct')
  async getTickDirectPost(@Body() body): Promise<any> {
    const { appid } = body
    const res = await this.appService.getTicketDirect(appid)
    console.log('res', res)
    if (res) {
      return res
    }
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        message: 'appid未在本系统内注册',
      },
      400,
    )
  }
}
