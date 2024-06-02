import './style.css'
import './css/theme.css'

import hljs from "highlight.js/lib/core";

import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const codeArea = document.querySelector(".code-wrapper");
const btn = document.querySelector("#btn");

export function sintaxHighlight() {
  // const code = codeArea.innerHTML;
  // codeArea.innerHTML = `<code class="preview hljs ${language.value}" aria-label="Code editor" contenteditable="true"></code>`
  // codeArea.querySelector("code").textContent = code;
  // hljs.highlightElement(codeArea.querySelector("code"));

  const code = document.querySelector(".code-wrapper code");
  delete code.dataset.highlighted;
  hljs.highlightElement(code);
}

btn.addEventListener("click", () => {
  sintaxHighlight()
});