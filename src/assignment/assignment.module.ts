import { Module, forwardRef } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { RequestModule } from 'src/request/request.module';
import { BandModule } from 'src/band/band.module';
import { AssignmentController } from './assignment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentSchema } from './schemas/assignment.schema';

@Module({
  providers: [AssignmentService],
  imports: [
    RequestModule,
    forwardRef(() => BandModule),
    MongooseModule.forFeature([{name: "Assignment", schema: AssignmentSchema}])
  ],
  controllers: [AssignmentController],
  exports: [AssignmentService]
})
export class AssignmentModule {}
