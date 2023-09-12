import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleDto } from 'src/sales/dto/create-sale.dto';
import { SaleDto } from 'src/sales/dto/sale.dto';
import { UpdateSaleDto } from 'src/sales/dto/update-sale.dto';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async createSale(createSaleDto: CreateSaleDto) {
    return await this.prisma.sale.create({ data: createSaleDto });
  }

  async updateSale(saleId: string, updateSaleDto: UpdateSaleDto) {
    const sale = await this.prisma.sale.findUnique({where: {id: saleId}})

    if(!sale) throw new NotFoundException(`No Sale was found with the id ${saleId}`)

    return await this.prisma.sale.update({where: {id: saleId}, data: updateSaleDto})
  }

  async deleteSale(saleId: string) {
    const sale = await this.prisma.sale.findUnique({where: {id: saleId}})

    if(!sale) throw new NotFoundException(`No Sale was found with the id ${saleId}`)

    return this.prisma.sale.delete({where: {id: saleId}})
  }

  async getSales(): Promise<Array<SaleDto>> {
    //@TODO - handle pagination
    return await this.prisma.sale.findMany()
  }
}
