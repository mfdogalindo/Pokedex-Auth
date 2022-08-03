import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './Common/Exceptions/HttpExceptionFilter';
import { UsersModule } from './Users/users.module';

@Module({
  imports: [UsersModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
