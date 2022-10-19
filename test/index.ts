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
