import { CreateRiskUseCase } from '../../../src/application/risk/use-cases/create-risk.use-case';
import { RiskRepository } from '../../../src/domain/risk/risk.repository';
import { Risk, RiskStatus } from '../../../src/domain/risk/risk.entity';

class InMemoryRiskRepository implements RiskRepository {
  private risks: Risk[] = [];

  async create(data: any): Promise<Risk> {
    const risk = new Risk({
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      riskLevel: data.probability * data.impact,
      ...data,
    });
    this.risks.push(risk);
    return risk;
  }

  async findById(): Promise<Risk | null> {
    return null;
  }

  async findAll(): Promise<Risk[]> {
    return this.risks;
  }

  async update(): Promise<Risk> {
    throw new Error('not implemented');
  }

  async delete(): Promise<void> {
    return;
  }
}

describe('CreateRiskUseCase', () => {
  it('should calculate risk level as probability x impact', async () => {
    const repo = new InMemoryRiskRepository();
    const useCase = new CreateRiskUseCase(repo as any);

    const risk = await useCase.execute({
      title: 'Risco de indisponibilidade',
      description: 'Queda de data center primário',
      category: 'OPERACIONAL',
      probability: 5,
      impact: 4,
      status: RiskStatus.OPEN,
      owner: 'user-1',
    });

    expect(risk.riskLevel).toBe(20);
  });
});

