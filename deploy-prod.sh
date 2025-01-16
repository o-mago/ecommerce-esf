cd dist
cat > CNAME <<- "EOF"
doe.esfjf.com.br
EOF
git init
git remote add origin https://github.com/o-mago/doe-esf.git
git fetch
git symbolic-ref HEAD refs/heads/gh-pages
git add .
git commit -m "deploy"
git push origin gh-pages --force