export function headSEO(url) {
  let headSEO = {
    title: "maple - React基础框架",
    author: "maple",
    keywords: "maple,mapleUI,component,react",
    description: "React基础框架"
  };
  switch (url) {
    case "/": break;
    case "/demo":
      headSEO.title = "demo";
      break;
  }
  return headSEO;
}