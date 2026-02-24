import { Risk, RiskStatus } from './risk.entity';

export interface CreateRiskData {
  title: string;
  description: string;
  category: string;
  probability: number;
  impact: number;
  status: RiskStatus;
  owner: string;
}

export interface UpdateRiskData {
  title?: string;
  description?: string;
  category?: string;
  probability?: number;
  impact?: number;
  status?: RiskStatus;
  owner?: string;
}

export interface RiskRepository {
  create(data: CreateRiskData): Promise<Risk>;
  findById(id: string): Promise<Risk | null>;
  findAll(): Promise<Risk[]>;
  update(id: string, data: UpdateRiskData): Promise<Risk>;
  delete(id: string): Promise<void>;
}
