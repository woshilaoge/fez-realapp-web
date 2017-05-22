fez-realapp-web
====
powerBy echarts3+vue2+iview+mock

By xiaoxianxuezhang   2017/4/26


## UI库iView（ https://www.iviewui.com ）

# 使用--------------------------------------
基于FEZ构建的Vue单文件组件形式的模块化开发示例

> 本示例演示了基于FEZ构建vue单文件组件形式的开发结构，借助 FEZ 可以使用es6标准特性开发项目。

## 使用方法

- 本示例依赖 【[FEZ前端模块化工程开发框架](https://github.com/furic-zhao/fez)】请先`git clone https://github.com/furic-zhao/fez.git` 下载 FEZ工程框架 到本地任意目录

- 进入 FEZ 工程目录（cd fez），执行 `git clone https://github.com/woshilaoge/fez-realapp-web.git` 将本示例下载到 FEZ 根目录

- 进入 fez-realapp-web (cd fez-realapp-web)目录 执行 `gulp` 或 `gulp dev`,FEZ 会自动打开系统默认浏览器并进入研发环境。

> 若项目不在FEZ工程根目录，请自行修改项目目录中的`gulpfile.babel.js`文件中的路径。

### JS目录结构

````bash
src
└── lib  //主要放置一些非 bower 管理的JS文件
    ├── q.js
    ├── product-picker.js
    └── assign-index-china.js
````
- 文件命名为 assign*的js文件 设置为某些页面特有的文件，在打包后会自动插入设置好的页面。
 比如，assign-index-china.js 打包后只有 index.html页面引入了改js文件，假如其它页面同样是需要使用
 assign-index-qita-china.js 即可。


### gulp / conf.js

````bash
    gulp default/dev 开发环境
    gulp dist 上线环境（打包压缩合并）
````
- 当执行 gulp dist 会自动设置mock为 false， 若需要打包成mock数据版本的 ，需要设置
 .fezrc 里useMock > dist > true

- conf.js DEBUGMOCK 为开发环境（gulp dev）mock开关，public/conf.js 开关权限最大，当设置为false时，
 页面所有模块都走 真实接口数据，当 设置为 true 是，放开每个页面的 mock 权限，此时页面里的 conf.js 起作用
 以此类推。
