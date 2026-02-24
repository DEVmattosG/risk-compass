@echo off
REM Script para fazer push após criar o repositório no GitHub
REM Autor: GitHub Copilot
REM Data: 24/02/2026

setlocal enabledelayedexpansion

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║   Risk Compass - GitHub Push                           ║
echo ║   Email: guilhermeroh08@gmail.com                      ║
echo ║   Username: DEVmattosG                                 ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo ✓ Verifique se o repositório foi criado em:
echo   https://github.com/DEVmattosG/risk-compass
echo.
echo ✓ Clique em Create repository se ainda não fez!
echo.
pause

cd /d "%~dp0"

echo.
echo Fazendo push do código...
echo.

git branch -M main
git push -u origin main

echo.
echo ════════════════════════════════════════════════════════
echo ✓ Push concluído com sucesso!
echo ════════════════════════════════════════════════════════
echo.
echo Seu repositório está em:
echo https://github.com/DEVmattosG/risk-compass
echo.
echo Próximos passos:
echo 1. ✓ Verifique se o código está no GitHub
echo 2. Deploy no Vercel (veja QUICK_START.md)
echo 3. Deploy no Railway (veja QUICK_START.md)
echo.
pause
