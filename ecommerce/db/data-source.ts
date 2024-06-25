import { Product } from 'src/product/Entity/product.entity'
import { UserEntity } from 'src/user/entities/user.entity'
import { DataSource, DataSourceOptions } from 'typeorm'
import { config } from 'dotenv'

config();
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,

    // to convert a string to number you can add "+" before it 

    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [Product, UserEntity],

    // when synchronize is false use Migration

    migrations: ['dist/db/migrations/*{.ts,.js}'],
    database: process.env.DATABASE,

    // setting synchronize true shouldn't be used in production , otherwise you can loose data 

    synchronize: true,
    logging: true
}


const dataSource = new DataSource(dataSourceOptions)

export default dataSource;