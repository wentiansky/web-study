# mock

- [mock](#mock)
  - [1. 拦截浏览器请求的方式](#1-拦截浏览器请求的方式)
    - [缺点](#缺点)
    - [插件](#插件)
  - [2. 通过服务代理](#2-通过服务代理)
    - [缺点](#缺点-1)
    - [方式](#方式)
    - [注意](#注意)

## 1. 拦截浏览器请求的方式

### 缺点

- 不能再在览器 network 中看到请求；
- 需要引入三方插件；

### 插件

- mock.js
- better-mock
- just-mock(浏览器插件，收费)

## 2. 通过服务代理

### 缺点

- 需要启动一个后台服务

### 方式

- 启动 node.js 服务脚本(如: koa)；
- 配置 webpack devServer 的中间件(middlewares)；
- 使用 Charles 代理工具；

### 注意

- Charles 不能抓去 localhost 域名，需要替换为 localhost.charlesproxy.com
