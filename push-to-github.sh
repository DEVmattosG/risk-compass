#!/bin/bash
# Script para fazer push para GitHub e configurar automaticamente

echo "=========================================="
echo "Risk Compass - GitHub Push Setup"
echo "=========================================="
echo ""

# Solicitar informações do usuário
read -p "Digite seu usuario do GitHub: " USERNAME
read -p "Digite o nome do repositorio [risk-compass]: " REPO
REPO=${REPO:-risk-compass}

echo ""
echo "Configurando repositório Git..."

# Configurar email e nome (usar valores padrão se não configurado)
git config user.email "dev@${USERNAME}.github.com" 2>/dev/null || git config --global user.email "dev@${USERNAME}.github.com"
git config user.name "${USERNAME}" 2>/dev/null || git config --global user.name "${USERNAME}"

# Adicionar remote
git remote add origin "https://github.com/${USERNAME}/${REPO}.git" 2>/dev/null || \
git remote set-url origin "https://github.com/${USERNAME}/${REPO}.git"

# Renomear branch
git branch -M main

echo ""
echo "Fazendo push para GitHub..."
git push -u origin main

echo ""
echo "=========================================="
echo "✅ Push concluido com sucesso!"
echo "=========================================="
echo ""
echo "Seu repositorio esta em:"
echo "https://github.com/${USERNAME}/${REPO}"
echo ""
echo "Proximas etapas:"
echo "1. Crie um repositorio vazio em https://github.com/new"
echo "2. Execute: git push -u origin main"
echo "3. Configure Vercel para frontend"
echo "4. Configure Railway para backend"
echo ""
echo "Veja STATUS.md e DEPLOYMENT.md para mais detalhes."
echo "=========================================="
