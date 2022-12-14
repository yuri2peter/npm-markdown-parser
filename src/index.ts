const CSSInliner = require("css-inliner");
const MarkdownIt = require("markdown-it");

import { styles } from "./styles";

/**
 * markdown转html，可附加样式
 * @param {*} markdownText markdown纯文本
 * @param {*} options 配置。styles: css纯文本；className：css根节点类名
 */
export async function markdownToHtml(
  markdownText: string,
  options: { className: string; styles: string } = {
    className: "markdown-body",
    styles,
  }
) {
  const html = new MarkdownIt().render(markdownText);
  let body = `<div class="${options.className}">${html}</div>`;
  const css = `<style>${options.styles}</style>`;
  body = css + body;
  const inliner = new CSSInliner();
  body = await inliner.inlineCSSAsync(body);
  return body;
}
