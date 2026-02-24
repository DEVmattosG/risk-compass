#!/bin/bash
set -e

echo "🔨 Building NestJS application..."
cd backend
npm install
npm run build
echo "✅ Build completed successfully"
