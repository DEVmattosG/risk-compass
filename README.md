## Risk Compass

Aplicação web de gestão de riscos com matriz de risco 5x5 (Probabilidade x Impacto), baseada em Clean Architecture, princípios SOLID e Secure by Design.

### Arquitetura

- **Backend (`backend`)**: NestJS + Fastify, TypeScript, Prisma, PostgreSQL.
- **Frontend (`frontend`)**: Next.js (App Router), TypeScript, TailwindCSS, Recharts.
- **Camadas Clean Architecture** (backend):
  - `domain`: entidades de negócio e interfaces de repositório.
  - `application`: casos de uso (use cases) e DTOs.
  - `infrastructure`: Prisma, repositórios concretos, hashing de senha, logging, auditoria.
  - `presentation`: NestJS (módulos, controllers, guards, middlewares).

### Segurança

- Autenticação **JWT** com **refresh token** em cookie `httpOnly`, `secure`, `sameSite=strict`.
- **RBAC** baseado em roles com decorator `@Roles` e `RolesGuard`.
- **Rate limiting**, **Helmet**, CORS restritivo.
- **Validação** forte com `class-validator` na borda HTTP.
- **CSRF** com middleware `CsrfMiddleware` (cookie + header `x-csrf-token`).
- ORM Prisma protegendo contra SQL Injection.
- Logs estruturados com serviço de logger customizado.

### Execução local (sem Docker)

1. **Backend**

```bash
cd backend
npm install
npx prisma generate
# Ajuste o .env se necessário (DATABASE_URL do PostgreSQL local)
npx prisma migrate dev --name init
npm run start:dev
```

2. **Frontend**

```bash
cd frontend
npm install
npm run dev
```

- Backend: `http://localhost:3001`
- Frontend: `http://localhost:3000`

### Execução com Docker (quando tiver Docker instalado)

```bash
cp config/.env.example .env
docker-compose up --build
```

Serviços:

- `frontend`: `http://localhost:3000`
- `backend`: `http://localhost:3001`
- `db` (Postgres): `localhost:5432`

### Qualidade de código

- **ESLint** e **Prettier** configurados em `backend` e `frontend`.
- **Husky** no backend com hook de `pre-commit` rodando `npm run lint` e `npm test`.
- Testes unitários no backend com **Jest + ts-jest** (ex.: `CreateRiskUseCase`).

```bash
cd backend
npm test
```

### Endpoints principais (backend)

- `POST /auth/login`: autenticação com e-mail/senha, retorna access token JWT e seta refresh token em cookie seguro.
- `POST /auth/refresh`: renova access token a partir de refresh token.
- `GET /risks`: lista riscos (protegido por JWT + RBAC).
- `POST /risks`: cria risco (protegido por JWT + RBAC).

### Frontend

- Dashboard com:
  - Total de riscos.
  - Riscos críticos.
  - Riscos por categoria.
  - Riscos por status.
  - Matriz de risco 5x5 visual (heatmap) com Recharts.
- Telas de:
  - Listagem de riscos (`/risks`).
  - Criação de novo risco (`/risks/new`).

