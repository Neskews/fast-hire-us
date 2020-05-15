import { Module, forwardRef } from '@nestjs/common';
import { BandController } from './band.controller';
import { BandService } from './band.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BandSchema } from './schemas/band.schema';
import { AuthModule } from 'src/auth/auth.module';
import { AssignmentModule } from 'src/assignment/assignment.module';

@Module({
    imports: [
      MongooseModule.forFeature(
        [
          {
            name: "Band",
            schema: BandSchema
          }
        ]
      ),
      AuthModule,
      forwardRef(() => AssignmentModule)
    ],
  controllers: [BandController],
  providers: [BandService],
  exports: [BandService]
})
export class BandModule {}
