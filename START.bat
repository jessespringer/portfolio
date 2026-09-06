@echo off
title Jesse Springer Portfolio
echo.
echo  Jesse Springer Portfolio - Local Preview
echo  =========================================
echo.

if not exist "node_modules" (
  echo  First run: installing dependencies...
  call npm install
  echo.
)

echo  Starting portfolio site...
echo  Open your browser to: http://localhost:5000
echo  Press Ctrl+C to stop
echo.
call npm run dev
