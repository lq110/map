1. react 介绍【面试的时候】

- react 是干什么的？
  前端框架
- react 能干什么？
  开发网站，单页面应用，手机 app app
  vue 和 react 几乎在使用上和原理上非常的相似，vue 最初就是借鉴的 react 开发
  react 好处：
  api 非常少，使用起来很简单，灵活。
  react 函数式编程思想

2. react 原理
   vue 单向数据流 != 数据单向绑定
   它和 vue 不同的地方：数据单向绑定的
   父组件 变量 传递给 子组件 子组件不可以修改父组件传来的变量因为数据流是单向的，也就是说从父级传递过来的数据
   react【数据单向绑定】
   也就是说，他不能自动的监听到数据的变化，不能自动实现 vue 中数据双向绑定
   我们在 react 中要实现双向数据绑定，需要手动的设置 setState

   1. 单向数据流

3. 官网阅读
4. 项目结构

- 创建项目
  注意：如果电脑上安装过 create-react-app 脚手架需要卸载
  npm unistall -g create-react-app
- npx create-react-app 项目名
  npm 里面有一个 npx
  npx 是运行本地 node_module 包里依赖的
  npm 先运行本地项目，如果没找到去本机全局里找
- 项目结构
  node_modules 它是我们项目启动时所需要运行的依赖
  public 它是我们的 html 模板所在的公共文件夹，如果你在 public
  .gitignore 它是一份告诉 git 提交的名单
  /node_modules 告诉 git
  package.json 我们 node_modules 包依赖的清单目录，也就是说 npm 安装的所有依赖的名字都会写入到
  package.json 里去，还有他是我们启动项目，打包项目的命令都会在这里
  package.json 作用：依赖的清单，命令的运行
  当我们拿到一个项目，【公司项目】，一般来说都不会给你项目带着 node_module 包的，那就需要我们自己安装所有依赖。
  npm instal
  【最重要的：/src】
  src 是我们开发的源码所在文件夹
  svg 矢量图 ：不会失真，但是色彩值对比 jpg 少，色彩不是很丰富
  svg 我们前端可以完全手写出来
  src 下处于 index.js 其余都能山
  为什么删？因为我们要重构自己的项目结构
  在公司里开发项目，是有一个项目结构开发规范
  /src
  /viwe[存放在我们页面级的组件]
  /components[view 组件里公用的一些弹窗之类的]
  /api[把整个项目里所有的 ajax 请求写在这里]
  /tools[转换时间，分割数组，功能性纯 js 文件]
  /assets[静态资源]
  index.js[位置不可变]
  # 初始组件--function
  命名规则： 1.首字母大写 因为小写的表示原生 html 标签，<app/>>原生标签里没有这个 app 标签，所以报错。
  官方规定：组件名男子首字母必须大写
  react 才会区分出来这个组件
  # 项目命令
  npm run start 启动本地项目开发环境
  npm run build 打包 src 源码，变成原始的 js 和 html，双击打开就能在浏览器看
  npm run eject 释放我们项目【官方】配置文件，且该命令只能运行一次，不可恢复
  npm run eject
  react
