import { IsNotEmpty, IsString, IsUUID, isNotEmpty } from "class-validator";

export class UpdateSaleDto {
  @IsNotEmpty()
  @IsString()
  product: string;

  @IsNotEmpty()
  @IsString()
  customer: string;
}