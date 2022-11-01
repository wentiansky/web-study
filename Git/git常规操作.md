# git常规操作

## 1. 提交规范
  - feat: 新功能(feature)
  - fix: 修补bug
  - docs: 文档
  - style: 格式(不影响代码行的变动)，如空格、空行、逗号和格式化等
  - refactor: 重构(既不是新增功能，也不是修改bug的代码变动)
  - perf: 性能优化
  - test: 增加测试
  - chore: 构建工程或辅助工具的变动

## 2. rebase代替merge
  * 使用场景：rebase的来源分支不是多人开发，因为rebase会改变提交记录

  ```bash
  git checkout dev
  git rebase origin/master
  # 如果有冲突，先解决冲突
  git add .
  git rebase --continue
  # 解决完冲突，不要git pull

  ```

## 3. 回退提交

+ > `git reset [<mode>] [<commit>]`

  - **--soft**

  ```bash
    # 使用--soft仅会把当前分支的HEAD指向给定的版本
    # 不会修改index和working tree
    git reset --soft d9ad4d1fe5fcca1e0525e5a9e3bedf8e7c08b402
    # 不会显示退回的提交记录
    git log
    # 回退提交的修改仍在index(暂存区)中，无需再次执行git add
    git status
  ```
  
  - **--hard**

  ```bash
    # 使用--hard会修改index(暂存)和working tree(工作目录)
    # 彻底还原上一次状态且无法找回
    git reset --hard d9ad4d1fe5fcca1e0525e5a9e3bedf8e7c08b402
  ```

  - **--mixed**

  ```bash
    # 使用--mixed修改了index(暂存)
    # 需要执行git add
    git reset --mixed d9ad4d1fe5fcca1e0525e5a9e3bedf8e7c08b402
  ```
  
  - **强制推送到远程仓库**

  ```bash
    git push origin 分支名 --force
  ```

+ > git revert [commit]

  ```bash
    # git revert会回退到指定提交的前一次提交
    # 会产生一个新的commit，将本次回退作为修改提交
    # 好处是不会修改历史提交记录
    git revert d9ad4d1fe5fcca1e0525e5a9e3bedf8e7c08b402
  ```

## 4. fork了一个开源项目，更新本地项目tag到最新版本

```bash
# 查看远程
git remote -v

# 添加源仓库地址
git remote add upstream git@github.com:vuejs/vue.git
git fetch upstream --tags
git push --tags
git tag
```

## 5. 挑选提交

> git cherry-pick

  ```bash
    # 挑选单个hash
    git cherry-pick [<hash>]
    # 转移该分支最新的提交
    git cherry-pick [<分支名>]
    # 将A、B两个提交应用到当前分支
    git cherry-pick [<hashA>] [<hashB>]
    # 将(A, B]的提交应用到当前分支
    git cherry-pick [<hashA>]..[<hashB>]
    # 将[A, B]的提交应用到当前分支
    git cherry-pick [<hashA>]^..[<hashB>]
    # 遇到冲突，继续进行
    git cherry-pick --continue
    # 遇到冲突，停止
    git cherry-pick --abort
    # 遇到冲突，退出
    git cherry-pick --quit
  ```