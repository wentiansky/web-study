## 本地生成SSH
1. 删除 .ssh 文件夹`C:\Users\(本地用户名)\.ssh` 中的 `known_hosts`(直接删除即可)；
2. 在下载好的Git中的bin目录下（一般是 C:\Program Files\Git\bin）打开bash.exe输入命令`ssh-keygen -t rsa -C "username"`(注：username为你git上的用户名)，如果执行成功。返回：Generating public/private rsa key pair.Enter file in which to save the key (/Users/username/.ssh/id_rsa): //这里的username是电脑上的用户名，这个地址也是文件的存储地址，然后一直按回车即可；
3. 将文件夹`C:\Users\(本地用户名)\.ssh`下的`id_rsa.pub`全部复制；
4. 登录github，新建一个SSH，粘贴；
5. 在bash.exe中输入`ssh -T git@github.com`，然后会跳出一堆内容你只需输入yes回车就完事了，然后他会提示你成功了