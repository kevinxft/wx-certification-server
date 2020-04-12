/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, HttpService } from '@nestjs/common'
import { WeappService } from './weapp/weapp.service'
const cache = {}
const ticketCache = {}

@Injectable()
export class AppService {
  constructor(
    private readonly http: HttpService,
    private readonly weappService: WeappService,
  ) {}

  async refreshToken(appid: string, secret: string): Promise<any> {
    const { data } = await this.http
      .get('https://api.weixin.qq.com/cgi-bin/token', {
        params: {
          grant_type: 'client_credential',
          appid,
          secret,
        },
      })
      .toPromise()
    cache[appid] = {
      ...data,
      updatedAt: Date.now(),
    }
    return data
  }

  async getAccessToken(appid: string, secret: string): Promise<any> {
    const app = cache[appid]
    if (app) {
      const { updatedAt, expires_in } = app
      const needRefresh =
        Math.floor((Date.now() - updatedAt) / 1000) + 180 >= expires_in
      if (!needRefresh) {
        return app
      }
      const data = await this.refreshToken(appid, secret)
      return data
    } else {
      const data = await this.refreshToken(appid, secret)
      return data
    }
  }

  private async refreshTicket(access_token: string): Promise<any> {
    const { data } = await this.http
      .get('https://api.weixin.qq.com/cgi-bin/ticket/getticket', {
        params: {
          access_token,
          type: 'jsapi',
        },
      })
      .toPromise()
    ticketCache[access_token] = {
      ...data,
      updatedAt: Date.now(),
    }
    return data
  }

  async getTicket(access_token: string): Promise<any> {
    const app = ticketCache[access_token]
    if (app) {
      const { updatedAt, expires_in } = app
      const needRefresh =
        Math.floor((Date.now() - updatedAt) / 1000) + 180 >= expires_in
      if (!needRefresh) {
        return app
      }
      const data = await this.refreshTicket(access_token)
      return data
    } else {
      const data = await this.refreshTicket(access_token)
      return data
    }
  }

  async getTicketDirect(appid: string): Promise<any> {
    const weapp = await this.weappService.findOne(appid)
    if (weapp) {
      const { access_token } = await this.getAccessToken(appid, weapp.secret)
      const data = await this.getTicket(access_token)
      return data
    }
    return null
  }
}
