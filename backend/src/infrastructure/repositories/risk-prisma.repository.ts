import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateRiskData, RiskRepository, UpdateRiskData } from '@domain/risk/risk.repository';
import { Risk, RiskStatus } from '@domain/risk/risk.entity';

@Injectable()
export class RiskPrismaRepository implements RiskRepository {
  constructor(private readonly prisma: PrismaService) {}

  private mapToDomain(record: any): Risk {
    return new Risk({
      id: record.id,
      title: record.title,
      description: record.description,
      category: record.category,
      probability: record.probability,
      impact: record.impact,
      riskLevel: record.riskLevel,
      status: record.status as RiskStatus,
      owner: record.owner,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  async create(data: CreateRiskData): Promise<Risk> {
    const record = await this.prisma.risk.create({
      data: {
        ...data,
        riskLevel: data.probability * data.impact,
      },
    });
    return this.mapToDomain(record);
  }

  async findById(id: string): Promise<Risk | null> {
    const record = await this.prisma.risk.findUnique({ where: { id } });
    return record ? this.mapToDomain(record) : null;
  }

  async findAll(): Promise<Risk[]> {
    const records = await this.prisma.risk.findMany();
    return records.map((record: any) => this.mapToDomain(record));
  }

  async update(id: string, data: UpdateRiskData): Promise<Risk> {
    const record = await this.prisma.risk.update({
      where: { id },
      data: {
        ...data,
        riskLevel:
          data.probability !== undefined && data.impact !== undefined
            ? data.probability * data.impact
            : undefined,
      },
    });
    return this.mapToDomain(record);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.risk.delete({ where: { id } });
  }
}

