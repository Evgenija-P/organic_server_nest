import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/:id')
  findProductById(@Req() request) {
    const { id } = request.params;
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Put('/:id')
  async publishPost(@Req() request) {
    const { id } = request.params;
    const dataToUpdate = request.body;

    return this.productsService.updateProduct(id, dataToUpdate);
  }

  @Delete('/:id')
  delete(@Req() request) {
    const { id } = request.params;
    // console.log(id);
    return this.productsService.deleteProduct(id);
  }
}
