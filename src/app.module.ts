import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose'


@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://Leixer:leixer2001@cluster0.t1om0.mongodb.net/nest-product?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
