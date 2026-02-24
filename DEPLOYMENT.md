# 🚀 Risk Compass - Deployment Instructions

## Quick Start (Local)

### Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
# Backend rodará em http://localhost:3001
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# Frontend rodará em http://localhost:3000
```

## Deploy no Vercel (Frontend)

O frontend Next.js pode ser facilmente deployado no Vercel:

1. **Crie uma conta no Vercel**: https://vercel.com
2. **Conecte seu repositório GitHub**
3. **Configure as variáveis de ambiente**:
   - `NEXT_PUBLIC_API_BASE_URL`: URL do seu backend

```bash
# Ou via CLI
npm i -g vercel
vercel
```

## Deploy do Backend

### Opção 1: Railway (Recomendado)
1. Acesse https://railway.app
2. Conecte seu GitHub
3. Crie um novo projeto
4. Selecione este repositório
5. Configure as variáveis de ambiente (.env)
6. Deploy automático!

### Opção 2: Render
1. Acesse https://render.com
2. Create new → Web Service
3. Conecte seu repositório
4. Configure o build e start commands
5. Deploy

### Opção 3: Fly.io
```bash
npm i -g @fly.io/cli
fly auth login
fly launch
fly deploy
```

## Variáveis de Ambiente

### Backend (.env)
```
DATABASE_URL="postgresql://user:password@host:port/db"
PORT=3001
JWT_ACCESS_SECRET="sua-chave-secreta"
JWT_REFRESH_SECRET="sua-chave-secreta"
COOKIE_SECRET="sua-chave-secreta"
CORS_ORIGIN="https://seu-dominio.com"
NODE_ENV=production
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_BASE_URL="https://seu-backend.com"
```

## Verificação

- Frontend: Acesse https://seu-dominio-vercel.com
- Backend: Teste com `curl https://seu-backend.com/risks`

## Próximos Passos

1. [x] Código inicializado no Git
2. [ ] Criar repositório público no GitHub
3. [ ] Configurar Vercel para frontend
4. [ ] Configurar Railway/Render para backend
5. [ ] Testar endpoints
6. [ ] Implementar testes E2E
