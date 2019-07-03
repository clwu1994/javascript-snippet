# javascript-snippet

1. 安装 babel-node
```
npm i -g @babel/core @babel/node
```
2. 安装 presets 并配置 .babelrc 文件
```
{
  "presets": [ "@babel/preset-env", "@babel/preset-typescript" ]
}
```
3. 执行 babel-node
```
babel-node index --extensions '.ts'
或者
npm run start
```