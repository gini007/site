@echo off
echo Starting HBS Deep Tech React App...
echo.

echo Activating Node.js v24.7.0...
call nvm use 24.7.0

echo.
echo Cleaning up existing dependencies...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo.
echo Installing dependencies...
call npm install

echo.
echo Starting development server...
call npm start

pause
