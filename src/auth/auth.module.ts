import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './schemas/auth.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: "Auth",
    schema: AuthSchema
  }])],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
