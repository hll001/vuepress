#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# blog_src项目打包
npm run build

# 进入到dist中删除旧内容
cd ../dist

# 删除除了.git 以外的所有文件
ls | grep -v .git | xargs rm -rf

# 进入 blog_src 将打包内容复制到 dist 中,删除打包文件
cd ../blog_src

#将打包内容复制到 dist 中
mv docs/.vuepress/dist/* ../dist

# 删除打包文件
rm -rf docs/.vuepress/dist

# 提交 blog_src 中修改到GitHub中
git add .
git commit -m $1
git push -u origin master

# 进入到dist中提交打包内容
cd ../dist

# 提交打包内容到GitHub中
git add .
git commit -m $1
git push -u origin master


