npx prettier ./src/* --write && 
git commit -am "$1" && 
git push && 

cp -r ./src/* public/ && 
cp -r ./src/* heshbon/ && 
firebase deploy
