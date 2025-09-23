# Pour exécuter ce script dans PowerShell :
# ➤ Tape : .\check-env.ps1
# Assurez-vous d’être dans le bon dossier (racine du projet)
# Ce script vérifie si .env est suivi par Git et propose une action si besoin

Write-Host "📦 Vérification du fichier .env..."

$envTracked = git ls-files --error-unmatch backend/.env 2>$null

if ($envTracked) {
    Write-Host "🚨 ATTENTION : Le fichier .env est encore suivi par Git !"
    Write-Host "💡 Exécute : git rm --cached backend/.env"
    Write-Host "✅ Et vérifie que .env est bien listé dans ton fichier .gitignore"
} else {
    Write-Host "🧵 Tout va bien, le fichier .env est invisible pour Git 👻"
}