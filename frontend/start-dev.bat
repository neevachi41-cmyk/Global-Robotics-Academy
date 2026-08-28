@echo off
REM Development Startup Script for Global Robotics Academy (Windows)
REM This script starts both backend and frontend in development mode

echo 🚀 Starting Global Robotics Academy Development Environment...

REM Start Backend
echo 🔧 Starting Backend Server...
cd backend
start "Backend Server" cmd /k "npm run dev"
echo ✅ Backend started in new window

REM Wait for backend to be ready
echo ⏳ Waiting for backend to be ready...
timeout /t 5 /nobreak > nul

REM Start Frontend
echo 🎨 Starting Frontend Server...
cd ..\frontend
start "Frontend Server" cmd /k "npm start"
echo ✅ Frontend started in new window

echo.
echo 🎉 Development environment started successfully!
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo.
echo Close the server windows to stop the servers
pause