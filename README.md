# javascript-snippet

1. 安装 babel-node
```
npm i -g @babel/core @babel/node
```
2. 安装 presets 并配置 .babelrc 文件
```
{
  "presets": [ "@babel/preset-env" ]
}
```
3. 执行 babel-node
```
babel-node test.js
```