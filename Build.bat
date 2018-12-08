@echo off

set prodArg=%1
echo Start Build with argument "%prodArg%"

if "%prodArg%"=="" (
	set /p prodArg=No argument found please enter one now:
)


if "%prodArg%"=="prod" (
	npx webpack --mode production --color --progress
)
if "%prodArg%"=="dev" (
	npx webpack --color --watch --info-verbosity verbose
)

echo EOF Build.bat
pause