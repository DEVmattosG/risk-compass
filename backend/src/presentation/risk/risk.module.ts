import { Module } from '@nestjs/common';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';
import { RiskController } from './risk.controller';
import { CreateRiskUseCase } from '@application/risk/use-cases/create-risk.use-case';
import { ListRisksUseCase } from '@application/risk/use-cases/list-risks.use-case';

@Module({
  imports: [InfrastructureModule],
  controllers: [RiskController],
  providers: [CreateRiskUseCase, ListRisksUseCase],
})
export class RiskModule {}

