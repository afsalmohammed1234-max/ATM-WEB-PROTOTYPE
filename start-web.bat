@echo off
title ATM Web Prototype Server
echo ==============================================
echo   ATM Web Prototype - Dev Server Launcher
echo ==============================================
echo.
echo Opening browser at http://localhost:8080 ...
start "" "http://localhost:8080"
echo.
echo Starting Vite dev server (press Ctrl+C to stop)...
call npm.cmd run dev
pause
