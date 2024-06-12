import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './product/Entity/product.entity';
import { DataSource } from 'typeorm';
@Module({
  
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    entities: [Product],
    database: 'ecommerce',
    // setting synchronize true shouldn't be used in production , otherwise you can loose data 
    synchronize: true,
    logging: true 
  }) ,ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
