function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-BrV66TDq.js","./index-SSXOyoI7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-sqbAOziJ.js";import{R as t,r as c}from"./index-SSXOyoI7.js";import{H as l,A as u,C as h,D as E}from"./index-Cg7JBZ_I.js";import{renderElement as d,unmountElement as x}from"./react-18-6LLURv7u.js";import"./index-CzwIA_a6.js";import"./index-DqOCakQ5.js";import"./index-DrFu-skq.js";var _={code:h,a:u,...l},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},y=class{constructor(){this.render=async(r,e,o)=>{let n={..._,...e==null?void 0:e.components},s=E;return new Promise((m,a)=>{p(()=>import("./index-BrV66TDq.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:i})=>d(t.createElement(D,{showException:a,key:Math.random()},t.createElement(i,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>m())})},this.unmount=r=>{x(r)}}};export{y as DocsRenderer,_ as defaultComponents};
