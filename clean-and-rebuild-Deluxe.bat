:: -- Généré avec 💚 par Florent et Copilot

@echo off
cls
::   ==============================
::   =   CLEAN & REBUILD DELUXE   =
::   ==============================

echo.
:: Bip d’entrée (effet sonore Windows simple)
echo ^G

:: Étape 1 : Nettoyage
echo Suppression des anciens fichiers HTML...
del ".\public\assets\newsletter-pdf\clean\*.html" >nul 2>&1

:: Étape 2 : Nettoyage avec le script Node
echo.
echo  Nettoyage et generation en cours...

:: On utilise 'call' pour éviter l’ouverture d’une 2e fenêtre
call node "%~dp0clean-newsletters.cjs"

:: ==============================================
:: Étape 2 bis : Copie des images et du CSS
:: ==============================================

echo.
echo Copie des images et du fichier CSS du dossier sélectionne...

:: Récupération dynamique du nom du dossier source depuis le fichier sélectionné
set "sourceDir=public\assets\newsletter-pdf\News%id%"

:: Création dossier img dans /clean si nécessaire
if not exist "public\assets\newsletter-pdf\clean\img" (
    mkdir "public\assets\newsletter-pdf\clean\img"
)

:: Copie des images du dossier source vers clean\img
xcopy /E /Y "%sourceDir%\img" "public\assets\newsletter-pdf\clean\img" >nul

:: Copie de reader.css si présent
if exist "%sourceDir%\reader.css" (
    copy /Y "%sourceDir%\reader.css" "public\assets\newsletter-pdf\clean\reader.css" >nul
)

:: Étape 3 : Menu interactif
echo.

::   ==============================
::   =   Choix de la newsletter   =
::   ==============================

echo.
setlocal enabledelayedexpansion
set count=0
for %%f in (public\assets\newsletter-pdf\clean\news*.html) do (
    set /a count+=1
    set "file!count!=%%~nf"
    echo !count! - %%~nf
)

echo.
set /p choix=Entre le numero voulu : 
set "selection=!file%choix%!"
if not defined selection (
    echo Mauvais choix. Fin du script.
    pause
    exit /b
)

:: Récupération du numéro
set "id=%selection:~4%"

:: Ouverture du HTML dans navigateur
echo.
echo Ouverture de http://localhost:5173/newsletter/%id% ...
start "" "http://localhost:5173/newsletter/%id%"

:: Recherche PDF correspondant
echo.
echo Recherche et ouverture du PDF associe...
set "pdfPath=public\assets\newsletter-pdf\pdf\newsletter%id%-*.pdf"
for %%p in (%pdfPath%) do (
    if exist "%%~dpnxp" (
        echo Ouverture : %%~dpnxp
        start "" "%%~dpnxp"
        goto :son
    )
)
echo Aucun PDF trouve pour cette newsletter.

:: Suppression préalable du dossier img (s’il existe)
if exist "public\assets\newsletter-pdf\clean\img" (
    rmdir /S /Q "public\assets\newsletter-pdf\clean\img"
)

:: Bip final joyeux (note musicale via PowerShell)
:son
powershell -c "[console]::beep(880,150)"
powershell -c "[console]::beep(988,150)"
powershell -c "[console]::beep(1046,250)"

:: Fin du script
echo.
echo Et voila ! Que la newsletter soit avec toi, Florent !
pause