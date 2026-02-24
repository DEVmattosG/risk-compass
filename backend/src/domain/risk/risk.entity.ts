export enum RiskStatus {
  OPEN = 'OPEN',
  MITIGATED = 'MITIGATED',
  ACCEPTED = 'ACCEPTED',
  TRANSFERRED = 'TRANSFERRED',
}

export interface RiskProps {
  id: string;
  title: string;
  description: string;
  category: string;
  probability: number;
  impact: number;
  riskLevel: number;
  status: RiskStatus;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Risk {
  private props: RiskProps;

  constructor(props: RiskProps) {
    this.props = {
      ...props,
      riskLevel: props.probability * props.impact,
    };
  }

  get id() {
    return this.props.id;
  }

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get category() {
    return this.props.category;
  }

  get probability() {
    return this.props.probability;
  }

  get impact() {
    return this.props.impact;
  }

  get riskLevel() {
    return this.props.riskLevel;
  }

  get status() {
    return this.props.status;
  }

  get owner() {
    return this.props.owner;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  updateProbabilityAndImpact(probability: number, impact: number) {
    this.props.probability = probability;
    this.props.impact = impact;
    this.props.riskLevel = probability * impact;
    this.props.updatedAt = new Date();
  }

  updateStatus(status: RiskStatus) {
    this.props.status = status;
    this.props.updatedAt = new Date();
  }

  toJSON(): RiskProps {
    return { ...this.props };
  }
}
