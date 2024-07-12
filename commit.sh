cp ./styles/dark.css ./heshbon/dark.css
cp ./styles/dark.css ./english/dark.css
npx prettier ./heshbon/* --write && 
npx prettier ./english/* --write &&
git commit -am "$1" && 
git push && 

firebase deploy
