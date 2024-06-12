import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from './Entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createProductDTO } from './DTO/createProductDto';
import { updateProductDTO } from './DTO/updateProductDto';

@Injectable()
export class ProductService {

    constructor( 
        @InjectRepository(Product) private readonly productRepository : Repository<Product> 
    ){}

    // GET ALL PRODUCTS 
    getAllProducts() :Promise<Product[]> {
        return this.productRepository.find();
    }

    // Find one Product by its ID
    findOneProductByID(id : number) : Promise<Product>{
        return this.productRepository.findOneBy({id});
    }

    // CREATE A NEW PRODUCT
    createNewProduct(createProductDTO: createProductDTO) : Promise<Product>{
        const product = new Product();
            product.name = createProductDTO.name;
            product.description = createProductDTO.description;
            product.price = createProductDTO.price;
            product.quantity = createProductDTO.quantity;
            product.category = createProductDTO.category;
            
        return this.productRepository.save(product);
    }

    // Update One Product 
    updateProduct( id: number , updateProductDTO: updateProductDTO) : Promise<Product>{
            const product = new Product();
                product.name = updateProductDTO.name;
                product.description = updateProductDTO.description;
                product.price = updateProductDTO.price;
                product.quantity = updateProductDTO.quantity;
                product.category = updateProductDTO.category;
                product.id = id;

                return this.productRepository.save(product);
         
       
        }

    // Delete a product
    deleteProduct(id:number) : Promise<{affected? : number}>{
        return this.productRepository.delete(id);
    }
    
}
