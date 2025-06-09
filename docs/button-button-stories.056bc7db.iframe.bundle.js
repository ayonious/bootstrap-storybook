"use strict";(self.webpackChunk_ayonious_bootstrap_storybook=self.webpackChunk_ayonious_bootstrap_storybook||[]).push([[16],{"./src/components/button/button.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.Ay.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`,Button=({children,...props})=>(0,jsx_runtime.jsx)(StyledButton,{...props,children});Button.displayName="Button";Button.__docgenInfo={description:"",methods:[],displayName:"Button"};const button_stories={title:"Components/Button",component:Button},Primary={args:{children:"Click me"}},Large={args:{children:"Large Button",style:{fontSize:"1.5em"}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Click me'\n  }\n}",...Primary.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Large Button',\n    style: {\n      fontSize: '1.5em'\n    }\n  }\n}",...Large.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Large"]}}]);