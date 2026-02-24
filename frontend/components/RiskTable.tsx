type Risk = {
  id: string;
  title: string;
  category: string;
  probability: number;
  impact: number;
  riskLevel: number;
  status: string;
};

type Props = {
  risks: Risk[];
};

export function RiskTable({ risks }: Props) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold">Riscos cadastrados</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="bg-slate-900/80 text-slate-300">
            <tr>
              <th className="text-left px-3 py-2">Título</th>
              <th className="text-left px-3 py-2">Categoria</th>
              <th className="text-left px-3 py-2">Prob.</th>
              <th className="text-left px-3 py-2">Impacto</th>
              <th className="text-left px-3 py-2">Nível</th>
              <th className="text-left px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((r) => (
              <tr key={r.id} className="border-t border-slate-800">
                <td className="px-3 py-2">{r.title}</td>
                <td className="px-3 py-2">{r.category}</td>
                <td className="px-3 py-2">{r.probability}</td>
                <td className="px-3 py-2">{r.impact}</td>
                <td className="px-3 py-2">{r.riskLevel}</td>
                <td className="px-3 py-2">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

