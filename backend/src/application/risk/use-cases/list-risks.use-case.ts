import { Inject, Injectable } from '@nestjs/common';
import { RiskRepository } from '@domain/risk/risk.repository';
import { Risk } from '@domain/risk/risk.entity';

@Injectable()
export class ListRisksUseCase {
  constructor(@Inject('RiskRepository') private readonly risks: RiskRepository) {}

  async execute(): Promise<Risk[]> {
    return this.risks.findAll();
  }
}

