import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    name: string ;

    @Column()
    description: string ;

    @Column()
    quantity: number ;

    @Column()
    price: number ;

    @Column()
    category: string ;

    @CreateDateColumn()
    createdAt: Date ;

    @UpdateDateColumn()
    updatedAt: Date ;


} 