import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDTO } from './DTO/createProductDto';
import { Product } from './Entity/product.entity';
import { updateProductDTO } from './DTO/updateProductDto';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ){}

    @Get()
    getAll() {
        return this.productService.getAllProducts();
        
    }

    @Get(':id')
    getOne(@Param('id') id:string){
        
        console.log(id);
        // to convert the id to a number we use + operator 
        return this.productService.findOneProductByID(+id);
    }

    @Post('/create')
    createOne(@Body() product : createProductDTO ){
        return  this.productService.createNewProduct(product);
        
    }

    @Delete('/delete/:id')
    deleteOne(@Param('id') id:string){
        return this.productService.deleteProduct(+id);
    }

    @Patch('/:id/update')
    updateOne(@Body() product : updateProductDTO , @Param('id') id: number){
        return this.productService.updateProduct(+id , product)
    }


}
