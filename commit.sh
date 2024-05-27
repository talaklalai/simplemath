npx prettier ./src/index.html --write && 
git commit -am "$1" && 
git push && 
cp ./src/index.html public/ && 
firebase deploy
