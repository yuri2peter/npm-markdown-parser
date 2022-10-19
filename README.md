# @yuri2/markdown-parser

[Github](https://github.com/yuri2peter/npm-markdown-parser)
@yuri2/markdown-parser 是一个将 markdown 文本转换为带样式的 html 的方法库。支持服务端和客户端。

## 安装

`npm i @yuri2/markdown-parser`

## 使用

```ts
import { markdownToHtml } from "../src/index";

const text = `
# Hello World

I am a list:

- Item1
- Item2
- Item3

`;

async function main() {
  const results = await markdownToHtml(text);
  console.log(results);
}

main();
```
