import { Module } from '@nestjs/common';
import { SalesModule } from './sales/sales.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
    SalesModule,
    PrismaModule,
    AuthModule,
    UsersModule
  ]
})
export class AppModule {}
