#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 佈署在 main 分支
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:noname135/noname135.github.io.git main

# 佈署在 gh-pages 分支
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:noname135/MetaverSpace.git main:gh-pages

cd -