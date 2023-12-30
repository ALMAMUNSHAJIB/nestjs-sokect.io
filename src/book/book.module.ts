import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MulterModule } from '@nestjs/platform-express';
import { multerConfig } from 'src/multer.config';

@Module({
  imports: [
    MulterModule.register(multerConfig),
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
