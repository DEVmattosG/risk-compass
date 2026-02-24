import { Injectable, Inject } from '@nestjs/common';
import { RiskRepository, CreateRiskData } from '@domain/risk/risk.repository';
import { Risk } from '@domain/risk/risk.entity';

@Injectable()
export class CreateRiskUseCase {
  constructor(@Inject('RiskRepository') private readonly risks: RiskRepository) {}

  async execute(input: CreateRiskData): Promise<Risk> {
    return this.risks.create(input);
  }
}

