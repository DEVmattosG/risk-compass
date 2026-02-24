import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateRiskUseCase } from '@application/risk/use-cases/create-risk.use-case';
import { ListRisksUseCase } from '@application/risk/use-cases/list-risks.use-case';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RiskStatus } from '@domain/risk/risk.entity';

class CreateRiskBody {
  title!: string;
  description!: string;
  category!: string;
  probability!: number;
  impact!: number;
  status!: RiskStatus;
  owner!: string;
}

@Controller('risks')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RiskController {
  constructor(
    private readonly createRisk: CreateRiskUseCase,
    private readonly listRisks: ListRisksUseCase,
  ) {}

  @Post()
  @Roles('ADMIN', 'RISK_MANAGER')
  async create(@Body() body: CreateRiskBody) {
    const risk = await this.createRisk.execute(body);
    return risk.toJSON();
  }

  @Get()
  @Roles('ADMIN', 'RISK_MANAGER', 'VIEWER')
  async findAll() {
    const risks = await this.listRisks.execute();
    return risks.map((r) => r.toJSON());
  }
}

