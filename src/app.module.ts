import { Module, HttpModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WeappModule } from './weapp/weapp.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 3,
    }),
    WeappModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
