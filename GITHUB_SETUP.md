# 📋 Instruções para Fazer Push para GitHub

## Passo 1: Criar Repositório no GitHub

1. Vá para https://github.com/new
2. Nome do repositório: `risk-compass` (ou o nome que preferir)
3. Descrição: `Full-stack Risk Management Application with NestJS + Next.js`
4. Escolha: Public (para usar recursos grátis do Vercel)
5. Clique em "Create repository"

## Passo 2: Configurar Remote e Push

```bash
cd "c:\Users\guilherme.mattos\Desktop\Teste Cursor"

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/risk-compass.git

# Renomear branch para main
git branch -M main

# Push para o GitHub
git push -u origin main
```

## Passo 3: Fazer Deploy do Frontend no Vercel

1. Acesse https://vercel.com
2. Clique em "Sign Up" → "Continue with GitHub"
3. Autorize o Vercel
4. Clique em "New Project"
5. Selecione `risk-compass` na lista
6. Configure:
   - **Root Directory**: `./frontend`
   - **Environment Variables**:
     - `NEXT_PUBLIC_API_BASE_URL`: `https://seu-backend.railway.app` (preencheremos depois)
7. Clique em "Deploy"

## Passo 4: Fazer Deploy do Backend no Railway

1. Acesse https://railway.app
2. Clique em "Start New Project"
3. Selecione "Deploy from GitHub repo"
4. Autorize o Railway
5. Selecione `risk-compass`
6. Configure as variáveis de ambiente:
   ```
   DATABASE_URL=postgresql://...
   PORT=3001
   JWT_ACCESS_SECRET=seu-secret-aqui
   JWT_REFRESH_SECRET=seu-secret-aqui
   COOKIE_SECRET=seu-secret-aqui
   CORS_ORIGIN=https://seu-vercel-url.vercel.app
   NODE_ENV=production
   ```
7. Railway fará o deploy automático

## Passo 5: Conectar Frontend e Backend

1. Copie a URL do Railway (ex: `https://risk-compass-prod.railway.app`)
2. No Vercel:
   - Vá para Settings → Environment Variables
   - Atualize `NEXT_PUBLIC_API_BASE_URL` com a URL do Railway
   - Redeploy
3. No Railway:
   - Atualize `CORS_ORIGIN` com a URL do Vercel
   - Redeploy

## Resultado Final

- **Frontend**: https://seu-projeto.vercel.app
- **Backend**: https://seu-projeto.railway.app

Pronto! Seu projeto está no ar! 🎉
