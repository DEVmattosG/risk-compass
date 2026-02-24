'use client';

import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  Cell,
} from 'recharts';
import { getRiskColor } from '../lib/risk-matrix';

type MatrixCell = {
  probability: number;
  impact: number;
  score: number;
};

const data: MatrixCell[] = [];

for (let p = 1; p <= 5; p += 1) {
  for (let i = 1; i <= 5; i += 1) {
    const score = p * i;
    data.push({ probability: p, impact: i, score });
  }
}

export function RiskMatrix() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <h2 className="text-sm font-semibold mb-2">Matriz de Risco 5x5</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid stroke="#1f2937" />
            <XAxis
              type="number"
              dataKey="impact"
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
              label={{ value: 'Impacto', position: 'insideBottom', offset: -5, fill: '#9ca3af' }}
            />
            <YAxis
              type="number"
              dataKey="probability"
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
              label={{
                value: 'Probabilidade',
                angle: -90,
                position: 'insideLeft',
                fill: '#9ca3af',
              }}
            />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const cell = payload[0].payload as MatrixCell;
                return (
                  <div className="rounded-md bg-slate-900/90 px-3 py-2 text-xs shadow-lg border border-slate-700">
                    <div>Probabilidade: {cell.probability}</div>
                    <div>Impacto: {cell.impact}</div>
                    <div>Score: {cell.score}</div>
                  </div>
                );
              }}
            />
            <Scatter data={data}>
              {data.map((cell, idx) => (
                <Cell key={idx} fill={getRiskColor(cell.score)} radius={18} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

