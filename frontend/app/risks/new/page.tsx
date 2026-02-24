'use client';

import { FormEvent, useState } from 'react';
import { apiFetch } from '../../../lib/api-client';

export default function NewRiskPage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const body = {
      title: formData.get('title'),
      description: formData.get('description'),
      category: formData.get('category'),
      probability: Number(formData.get('probability')),
      impact: Number(formData.get('impact')),
      status: formData.get('status'),
      owner: formData.get('owner'),
    };

    try {
      await apiFetch('/risks', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      setSuccess(true);
      e.currentTarget.reset();
    } catch {
      setError('Falha ao criar risco');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-lg font-semibold mb-4">Novo risco</h1>
      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        <div>
          <label className="block mb-1">Título</label>
          <input name="title" className="w-full rounded border border-slate-700 bg-slate-900 px-2 py-1" />
        </div>
        <div>
          <label className="block mb-1">Descrição</label>
          <textarea
            name="description"
            className="w-full rounded border border-slate-700 bg-slate-900 px-2 py-1"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block mb-1">Categoria</label>
            <input
              name="category"
              className="w-full rounded border border-slate-700 bg-slate-900 px-2 py-1"
            />
          </div>
          <div>
            <label className="block mb-1">Responsável</label>
            <input
              name="owner"
              className="w-full rounded border border-slate-700 bg-slate-900 px-2 py-1"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block mb-1">Probabilidade (1-5)</label>
            <input
              type="number"
              min={1}
              max={5}
              name="probability"
              className="w-full rounded border border-slate-700 bg-slate-900 px-2 py-1"
            />
          </div>
          <div>
            <label className="block mb-1">Impacto (1-5)</label>
            <input
              type="number"
              min={1}
              max={5}
              name="impact"
              className="w-full rounded border border-slate-700 bg-slate-900 px-2 py-1"
            />
          </div>
          <div>
            <label className="block mb-1">Status</label>
            <select
              name="status"
              className="w-full rounded border border-slate-700 bg-slate-900 px-2 py-1"
            >
              <option value="OPEN">Aberto</option>
              <option value="MITIGATED">Mitigado</option>
              <option value="ACCEPTED">Aceito</option>
              <option value="TRANSFERRED">Transferido</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="rounded bg-emerald-500 px-3 py-1 text-sm font-medium disabled:opacity-60"
        >
          {submitting ? 'Salvando...' : 'Salvar'}
        </button>
        {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
        {success && <p className="text-xs text-emerald-400 mt-1">Risco criado com sucesso.</p>}
      </form>
    </div>
  );
}

