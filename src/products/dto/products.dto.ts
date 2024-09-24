import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  title: string;

  @IsString()
  img: string;

  @IsNumber()
  old_price: number;

  @IsNumber()
  current_price: number;

  @IsNumber()
  stars: number;

  @IsString()
  slug: string;

  @IsNumber()
  quantity: number;

  @IsString()
  short_text: string;

  @IsString()
  full_text: string;

  @IsString()
  additional_info: string;
}

export type TProductsUpdateDto = Partial<CreateProductDto>;
