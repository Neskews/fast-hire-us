import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { RequestModule } from "./request/request.module";
import { BandModule } from './band/band.module';
import { AssignmentModule } from './assignment/assignment.module';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    RequestModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI), RequestModule, BandModule, AssignmentModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
