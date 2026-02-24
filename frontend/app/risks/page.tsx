'use client';

import { useEffect, useState } from 'react';
import { apiFetch } from '../../lib/api-client';
import { RiskTable } from '../../components/RiskTable';

type Risk = {
  id: string;
  title: string;
  category: string;
  probability: number;
  impact: number;
  riskLevel: number;
  status: string;
};

export default function RisksPage() {
  const [risks, setRisks] = useState<Risk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<Risk[]>('/risks')
      .then(setRisks)
      .catch(() => setError('Falha ao carregar riscos'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-sm text-slate-300">Carregando...</p>;
  if (error) return <p className="text-sm text-red-400">{error}</p>;

  return <RiskTable risks={risks} />;
}

