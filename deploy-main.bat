@echo off
echo Deploying to main branch...

REM Step 1: Ensure build is up to date
npm run build

REM Step 2: Copy contents of dist/ to root
xcopy dist\* . /s /e /y

REM Step 3: Add, commit, and push
git add .
git commit -m "Deploy Vite + React site"
git push origin main

echo Deployment complete!
pause