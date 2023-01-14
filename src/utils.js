import { marked } from 'marked'


function convertMarkdownContentToHtml(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]["content"] = marked(arr[i]["content"])
  }
  return arr
}


function convertNestedMarkdownContentToHtml(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]["list"] = convertMarkdownContentToHtml(arr[i]["list"])
  }
  return arr
}

export {
  convertMarkdownContentToHtml,
  convertNestedMarkdownContentToHtml,
  marked as convertMarkdownToHtml,
}