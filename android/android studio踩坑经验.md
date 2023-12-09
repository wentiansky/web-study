# android studio 踩坑经验

## 1. java 版本

报错：`Unable to load class 'javax.xml.bind.annotation.XmlSchema'`。

原因：java8 后的版本会删除一些自带依赖，需要在 build.gradle 文件的 dependencies 中添加相应的依赖（特殊的语法）。

- java8(1.8)；
- java11；
- java17(最新的 react native 需要)；

> 注意：一定要多看官方英文文档，中文文档更新较慢，不是最新的版本。

## 2. gradle 版本

- 报错：connect timeout；

原因：国内下载 gradle 官方资源会超时

方法 1：直接用浏览器访问官网下载地址，下载后，把 zip 包放在 gradle-wrapper.properties(gradle/wrapper) 同级目录，修改 gradle-wrapper.properties 文件。

方法 2：设置阿里云镜像地址，重新下载。

```bash
#distributionUrl=https\://services.gradle.org/distributions/gradle-3.3-all.zip
distributionUrl=https\://mirrors.aliyun.com/gradle/gradle-3.3-all.zip
#distributionUrl=https\://mirrors.aliyun.com/gradle/gradle-5.6.2-all.zip
#distributionUrl=https\://services.gradle.org/distributions/gradle-7.2-all.zip
#distributionUrl=gradle-7.2-all.zip
```

## 3. 打开安卓项目，启动按钮是灰色

- 如果是 react native 项目，直接把 android 文件夹拖到 android studio 中即可；
- 老的安卓项目，需要下载老版本的 android studio(技巧：比较项目的创建时间和 android studio 版本的发布时间)；

## 4. react native 启动项目

- 直接通过命令行，分别启动 node 服务，和启动安卓模拟器；
- 命令行启动 node 服务，通过 android studio 启动安卓模拟器；
