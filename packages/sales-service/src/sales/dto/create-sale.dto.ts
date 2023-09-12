import { IsNotEmpty, IsString } from "class-validator";

export class CreateSaleDto {
  @IsNotEmpty()
  @IsString()
  product: string;

  @IsNotEmpty()
  @IsString()
  customer: string;
}