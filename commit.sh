npx prettier ./src/* --write && 
npx prettier ./english/* --write &&
git commit -am "$1" && 
git push && 

cp -r ./src/* public/ && 
cp -r ./src/* heshbon/ && 
firebase deploy
