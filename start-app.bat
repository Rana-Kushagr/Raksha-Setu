@echo off
title RakshaSetu Server
cd /d "%~dp0"
echo Starting RakshaSetu Live 3D Emergency Web App...
start http://localhost:3000
"C:\Program Files\nodejs\node.exe" server.js
pause
