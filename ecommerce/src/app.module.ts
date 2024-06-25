import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './product/Entity/product.entity';
import { DataSource } from 'typeorm';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { ProductController } from './product/product.controller';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { dataSourceOptions } from 'db/data-source';
import { CategoryModule } from './category/category.module';
@Module({
  
  imports: [ TypeOrmModule.forRoot(dataSourceOptions) ,ProductModule, UserModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  constructor(private dataSource: DataSource){}

  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('product')
  }

}
