interface WeappData {
  name: string
  appid: string
  secret: string
  desc?: string
}

export interface WeappRes {
  data: WeappData
}

export interface WeappsRes {
  data: WeappData[]
  count: number
}
