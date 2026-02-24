# 🚀 Risk Compass - Guia Completo de Deploy

## 📋 Conteúdo Deste Repositório

Este repositório contém um **projeto full-stack completo** pronto para deploy:

- **Backend**: NestJS + Fastify + Prisma + SQLite
- **Frontend**: Next.js 14 + TypeScript + TailwindCSS + Recharts
- **Arquitetura**: Clean Architecture com separação em camadas
- **Segurança**: JWT, RBAC, CSRF, Rate Limiting, Helmet

## 🎯 Começando em 3 Passos

### 1️⃣ Criar Repositório no GitHub

```bash
# Acesse: https://github.com/new
# Nome: risk-compass
# Visibilidade: Public (recomendado para usar recursos grátis)
```

### 2️⃣ Fazer Push do Código

**No Windows (PowerShell):**
```powershell
cd "c:\Users\guilherme.mattos\Desktop\Teste Cursor"
.\push-to-github.bat
# Siga as instruções na tela
```

**No macOS/Linux:**
```bash
cd ./Teste\ Cursor
bash push-to-github.sh
# Siga as instruções na tela
```

**Manualmente:**
```bash
git remote add origin https://github.com/SEU_USUARIO/risk-compass.git
git branch -M main
git push -u origin main
```

### 3️⃣ Deploy Automático

Após o push, você tem 2 opções:

#### Opção A: Deploy Manual (5 minutos)

**Frontend (Vercel):**
1. https://vercel.com → Sign Up with GitHub
2. New Project → Selecione `risk-compass`
3. Root Directory: `./frontend`
4. Deploy!

**Backend (Railway):**
1. https://railway.app → New Project
2. Deploy from GitHub repo → Selecione `risk-compass`
3. Configure Environment Variables
4. Deploy!

#### Opção B: Deploy Automático (via GitHub Actions)

Já está configurado! Após cada push em `main`:
- Frontend faz deploy automático no Vercel
- Backend faz deploy automático no Railway

Você só precisa configurar os secrets do GitHub:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `RAILWAY_TOKEN`

## 📂 Estrutura dos Arquivos

```
risk-compass/
├── backend/                    # NestJS Backend
│   ├── src/
│   │   ├── domain/            # Entidades (Clean Arch)
│   │   ├── application/       # Use Cases
│   │   ├── infrastructure/    # DB, Repos
│   │   └── presentation/      # Controllers, Guards
│   ├── prisma/                # Database schema
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                   # Next.js Frontend
│   ├── app/                   # Páginas (App Router)
│   ├── components/            # Componentes React
│   ├── lib/                   # Utilities & API
│   ├── package.json
│   └── tailwind.config.ts
│
├── .github/
│   └── workflows/             # GitHub Actions CI/CD
│
├── config/
│   └── .env.example           # Variáveis de ambiente
│
├── DEPLOYMENT.md              # Guia detalhado
├── GITHUB_SETUP.md            # Passo a passo GitHub
├── STATUS.md                  # Status do projeto
└── push-to-github.bat         # Script automático (Windows)
```

## 🔐 Variáveis de Ambiente

### Backend (.env)

```env
# Database
DATABASE_URL="file:./dev.db"

# Server
PORT=3001
NODE_ENV=production

# JWT
JWT_ACCESS_SECRET="your-secret-key-here"
JWT_REFRESH_SECRET="your-secret-key-here"

# Security
COOKIE_SECRET="your-cookie-secret"
CORS_ORIGIN="https://seu-dominio.vercel.app"
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_BASE_URL="https://seu-backend.railway.app"
```

## 📊 Endpoints da API

```
POST   /auth/login       - Autenticação
POST   /auth/refresh     - Renovar token
GET    /risks            - Listar riscos
POST   /risks            - Criar risco
```

## 🧪 Testes Locais

```bash
# Terminal 1: Backend
cd backend
node dist/src/main.js
# Acesse: http://localhost:3001

# Terminal 2: Frontend
cd frontend
npm run dev
# Acesse: http://localhost:3000
```

## 📝 Documentação Detalhada

- **DEPLOYMENT.md** - Instruções completas de deployment
- **GITHUB_SETUP.md** - Guia passo a passo do GitHub
- **STATUS.md** - Status atual do projeto
- **README.md** - Documentação técnica (original)

## 🎓 Tecnologias Utilizadas

### Backend
- NestJS (Framework)
- Fastify (HTTP Server)
- TypeScript (Linguagem)
- Prisma (ORM)
- SQLite (Database)
- JWT (Autenticação)
- bcrypt (Password Hashing)

### Frontend
- Next.js 14 (Framework)
- React 18 (UI Library)
- TypeScript (Linguagem)
- TailwindCSS (Styling)
- Recharts (Gráficos)
- Axios (HTTP Client)

## 🚀 Próximas Etapas Recomendadas

- [ ] Conectar banco de dados PostgreSQL em produção
- [ ] Implementar mais testes unitários
- [ ] Adicionar testes E2E com Cypress
- [ ] Configurar monitoramento (Sentry, LogRocket)
- [ ] Implementar cache (Redis)
- [ ] Adicionar mais tipos de riscos
- [ ] Implementar export de dados (PDF, Excel)

## 💡 Dicas

1. **Não commite .env files** - Use `.env.example` como referência
2. **Use variáveis de ambiente** - Diferentes para dev, staging, prod
3. **Configure secrets no GitHub/Vercel/Railway** - Nunca faça push de secrets
4. **Teste antes de fazer push** - Rode `npm run build` localmente primeiro
5. **Monitore os logs** - Use o console do Vercel/Railway para debugar

## ⚠️ Troubleshooting

**Erro: "Cannot find module"**
```bash
# Solução: Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

**Erro: "CORS error"**
- Verifique `CORS_ORIGIN` no .env do backend
- Verifique `NEXT_PUBLIC_API_BASE_URL` no frontend

**Erro: "Database error"**
- Certifique-se que o `DATABASE_URL` está correto
- Execute `npx prisma migrate` no backend

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs (terminal local ou console do Vercel/Railway)
2. Leia os arquivos de documentação
3. Consulte a documentação oficial das tecnologias

## 📄 Licença

MIT - Sinta-se livre para usar este código em seus projetos!

---

**Pronto para fazer deploy?** Comece pelo passo 1️⃣ acima! 🎉
