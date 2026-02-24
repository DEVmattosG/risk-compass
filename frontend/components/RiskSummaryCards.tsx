type CategorySummary = { category: string; count: number };
type StatusSummary = { status: string; count: number };

type Props = {
  total: number;
  critical: number;
  byCategory: CategorySummary[];
  byStatus: StatusSummary[];
};

export function RiskSummaryCards({ total, critical, byCategory, byStatus }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
        <p className="text-xs text-slate-400 uppercase">Total de riscos</p>
        <p className="text-2xl font-semibold mt-1">{total}</p>
      </div>
      <div className="rounded-xl border border-red-700 bg-red-900/40 p-4">
        <p className="text-xs text-red-200 uppercase">Riscos críticos</p>
        <p className="text-2xl font-semibold mt-1">{critical}</p>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
        <p className="text-xs text-slate-400 uppercase mb-1">Por categoria</p>
        <ul className="text-xs space-y-1">
          {byCategory.map((c) => (
            <li key={c.category} className="flex justify-between">
              <span>{c.category}</span>
              <span className="text-slate-300">{c.count}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
        <p className="text-xs text-slate-400 uppercase mb-1">Por status</p>
        <ul className="text-xs space-y-1">
          {byStatus.map((s) => (
            <li key={s.status} className="flex justify-between">
              <span>{s.status}</span>
              <span className="text-slate-300">{s.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

