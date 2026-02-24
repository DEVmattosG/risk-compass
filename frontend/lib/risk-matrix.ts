export type RiskLevelLabel = 'Baixo' | 'Médio' | 'Alto' | 'Crítico';

export function getRiskLevelLabel(probability: number, impact: number): RiskLevelLabel {
  const score = probability * impact;
  if (score <= 4) return 'Baixo';
  if (score <= 9) return 'Médio';
  if (score <= 16) return 'Alto';
  return 'Crítico';
}

export function getRiskColor(score: number): string {
  if (score <= 4) return '#22c55e';
  if (score <= 9) return '#eab308';
  if (score <= 16) return '#f97316';
  return '#ef4444';
}

