import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateSaleDto } from 'src/sales/dto/create-sale.dto';
import { UpdateSaleDto } from 'src/sales/dto/update-sale.dto';
import { SalesService } from 'src/sales/sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  async getSales() {
    return await this.salesService.getSales()
  }

  @Post()
  async createSale(@Body() createSaleDto: CreateSaleDto) {
    return await this.salesService.createSale(createSaleDto)
  }

  @Patch(':id')
  async updateSale(@Param('id') saleId: string, @Body() updateSaleDto: UpdateSaleDto) {
    return await this.salesService.updateSale(saleId, updateSaleDto)
  }

  @Delete(':id')
  async deleteSale(@Param('id') saleId: string) {
    return await this.salesService.deleteSale(saleId)
  }
}
