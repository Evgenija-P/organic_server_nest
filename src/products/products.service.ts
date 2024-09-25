import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/products.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductsService {
constructor(private readonly prisma:PrismaService, private readonly configService:ConfigService){}

  findAll() {
       console.log(this.configService.get<string>("MODE"))
    // return this.prisma.product.findMany()
    return [
      {
        category: 'Фрукти',
        title: 'Свіжі стиглі яблука',
        img: 'https://res.cloudinary.com/dannh4de9/image/upload/v1717095923/organic/images_organic/fruits/um2v8uopucfikbivtfo4.jpg',
        old_price: 45,
        current_price: 40,
        stars: 5,
        slug: 'apple',
        quantity: 1,
        short_text:
          'Фасування: 1 кг, 5 кг, 10 кг. Умови зберігання: при температурі від 0°C до +4°C, у прохолодному темному місці. Умови транспортування: при температурі від +1°C до +4°C, уникати механічних пошкоджень. Період дозрівання: серпень-жовтень.',
        full_text:
          'Яблука містять вітаміни A, C, K, B6, а також калій, магній, залізо та фолієву кислоту. Калорійність - близько 52 ккал на 100 г. Білки - 0.3 г, Жири - 0.2 г, Вуглеводи - 14 г. Яблука корисні для серцево-судинної системи, сприяють травленню, зміцнюють імунітет. Можуть бути небезпечними для людей з алергією на фрукти або проблемами зі шлунково-кишковим трактом (через високу кислотність).',
        additional_info:
          'Яблука можна вживати свіжими, додавати до салатів, випічки, готувати з них компоти та джеми. На складі завжди є свіжі яблука, фасовані по 1 кг та 5 кг.',
      },
    ];
  }

  create(dto: CreateProductDto){
    return this.prisma.product.create({ 
      data: dto,
    })
  }
}
