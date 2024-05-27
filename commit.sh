npx prettier ./src/* --write && 
git commit -am "$1" && 
git push && 
cp ./src/* public/ && 
firebase deploy
