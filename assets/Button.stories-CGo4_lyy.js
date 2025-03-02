import{f as T}from"./index-C8R7Ecwb.js";import{R as q}from"./index-SSXOyoI7.js";const e={"storybook-button":"_storybook-button_1pemg_1","storybook-button--primary":"_storybook-button--primary_1pemg_10","storybook-button--secondary":"_storybook-button--secondary_1pemg_14","storybook-button--small":"_storybook-button--small_1pemg_19","storybook-button--medium":"_storybook-button--medium_1pemg_23","storybook-button--large":"_storybook-button--large_1pemg_27"},k=({primary:_=!1,size:f="medium",backgroundColor:B,label:h,...S})=>{const v=_?e["storybook-button--primary"]:e["storybook-button--secondary"];return q.createElement("button",{type:"button",className:[e["storybook-button"],e[`storybook-button--${f}`],v].join(" "),style:{backgroundColor:B},...S},h)};k.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const w={title:"通用/Button",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:T()}},o={args:{primary:!0,label:"Button"}},t={args:{label:"Button"}},r={args:{size:"large",label:"Button"}},a={args:{size:"small",label:"Button"}};var s,n,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var u,m,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var b,y,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const I=["Primary","Secondary","Large","Small"];export{r as Large,o as Primary,t as Secondary,a as Small,I as __namedExportsOrder,w as default};
