"use strict";(self.webpackChunk_ayonious_bootstrap_storybook=self.webpackChunk_ayonious_bootstrap_storybook||[]).push([[46],{"./src/components/cards/cards.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cards_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const CardArticleWrapper=styled_components_browser_esm.Ay.article`
  background: grey;
  border: solid black;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 350px;
  }
`,CardImageWrapper=styled_components_browser_esm.Ay.div`
  align-self: center;
  @media only screen and (min-width: 768px) {
    img {
      height: 350px;
      width: 350px;
    }
  }
  @media only screen and (max-width: 768px) {
    img {
      max-width: 100%;
    }
  }
`,InfoDivWrapper=styled_components_browser_esm.Ay.div`
  height: 350px;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  div {
    h2 {
      font-size: 30px;
      text-transform: capitalize;
      margin-bottom: 10px;
    }
    h6 {
      color: black;
      text-transform: capitalize;
    }
    p {
      padding: 20px 0 30px 0;
      text-align: left;
    }
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=props=>(0,jsx_runtime.jsxs)(CardArticleWrapper,{children:[(0,jsx_runtime.jsx)(CardImageWrapper,{children:(0,jsx_runtime.jsx)("img",{src:props.img})}),(0,jsx_runtime.jsx)(InfoDivWrapper,{children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h2",{children:props.title}),(0,jsx_runtime.jsx)("h6",{children:(0,jsx_runtime.jsx)("span",{children:" by Ayon "})}),(0,jsx_runtime.jsx)("p",{children:props.excerpt})]})})]});Card.displayName="Card";const cards=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card"};const cards_stories={title:"Components/Card",component:cards},Simple={args:{title:"This is some Title",excerpt:"lets talk about this niec day is this not good lets talk about this niec day is this not good lets talk about this niec day is this not good",img:"https://cdn.jsdelivr.net/gh/ayonious/console-table-printer@master/static-resources/quick-print.png"}};Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: "This is some Title",\n    excerpt: "lets talk about this niec day is this not good lets talk about this niec day is this not good lets talk about this niec day is this not good",\n    img: "https://cdn.jsdelivr.net/gh/ayonious/console-table-printer@master/static-resources/quick-print.png"\n  }\n}',...Simple.parameters?.docs?.source}}};const __namedExportsOrder=["Simple"]}}]);
//# sourceMappingURL=cards-cards-stories.9a1d17c8.iframe.bundle.js.map