yarn build &&
git checkout preview &&
rm -rf *.html *.js *.json *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push &&
git checkout -