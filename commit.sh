npx prettier ./heshbon/* --write && 
npx prettier ./english/* --write &&
git commit -am "$1" && 
git push && 

firebase deploy
