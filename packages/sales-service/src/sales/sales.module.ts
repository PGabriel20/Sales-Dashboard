import { Module } from '@nestjs/common';
import { SalesController } from 'src/sales/sales.controller';
import { SalesService } from 'src/sales/sales.service';

@Module({
  controllers: [SalesController],
  providers: [SalesService],
  exports: [SalesService]
})
export class SalesModule {}
