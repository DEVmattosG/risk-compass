@echo off
REM Script para fazer push para o GitHub

setlocal enabledelayedexpansion

echo.
echo ============================================
echo Risk Compass - GitHub Push Script
echo ============================================
echo.

set /p username="Digite seu usuario do GitHub: "
set /p repo="Digite o nome do repositorio (padrao: risk-compass): "

if "!repo!"=="" set repo=risk-compass

cd /d "%~dp0"

echo.
echo Configurando Git...
git config user.email "seu-email@github.com"
git config user.name "!username!"

echo.
echo Adicionando remote origin...
git remote add origin https://github.com/!username!/!repo!.git

echo.
echo Renomeando branch para main...
git branch -M main

echo.
echo Fazendo push para GitHub...
git push -u origin main

echo.
echo ============================================
echo Push concluido com sucesso!
echo.
echo Seu repositorio esta em:
echo https://github.com/!username!/!repo!
echo ============================================
echo.
pause
