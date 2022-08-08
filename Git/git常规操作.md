### rebase代替merge
  * 使用场景：rebase的来源分支不是多人开发，应为rebase会改变提交记录

```bash
git checkout dev
git rebase origin/master
# 如果有冲突，先解决冲突
git add .
git rebase --continue
# 解决完冲突，不要git pull

```

### push到远程，回退之前分支

```bash
git reflog
# 找到上一次的提交hash
git reset --hard d9ad4d1fe5fcca1e0525e5a9e3bedf8e7c08b402
git push --force
```

### fork了一个开源项目，更新本地项目tag到最新版本

```bash
# 查看远程
git remote -v

# 添加源仓库地址
git remote add upstream git@github.com:vuejs/vue.git
git fetch upstream --tags
git push --tags
git tag
```