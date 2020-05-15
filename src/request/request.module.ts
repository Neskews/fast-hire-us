import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestSchema } from 'src/request/schemas/request.schema';
import { RequestService } from './request.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RequestController],
  imports: [MongooseModule.forFeature([{
    name: "Request",
    schema: RequestSchema
  }]), AuthModule],
  providers: [RequestService],
  exports: [RequestService]
})
export class RequestModule {}
