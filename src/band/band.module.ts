import { Module } from '@nestjs/common';
import { BandController } from './band.controller';
import { BandService } from './band.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BandSchema } from './schemas/band.schema';
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
    ],
  controllers: [BandController],
  providers: [BandService],
  exports: [BandService]
})
export class BandModule {}
