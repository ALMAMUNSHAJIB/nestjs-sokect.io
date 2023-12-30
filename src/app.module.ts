import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AppGateway } from './app/app.gateway';

@Module({
  imports: [ BookModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
