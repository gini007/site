Write-Host "Starting HBS Deep Tech React App..." -ForegroundColor Green
Write-Host ""

Write-Host "Activating Node.js v24.7.0..." -ForegroundColor Yellow
nvm use 24.7.0

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Yellow
npm start

Read-Host "Press Enter to continue..."
