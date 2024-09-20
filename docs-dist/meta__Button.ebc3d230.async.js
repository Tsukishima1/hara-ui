"use strict";(self.webpackChunkhara_ui=self.webpackChunkhara_ui||[]).push([[461],{14361:function(l,a,t){var o;t.r(a),t.d(a,{demos:function(){return I}});var r=t(17061),u=t.n(r),s=t(17156),m=t.n(s),n=t(67294),c=t(4497),d=t(80140),I={"button-demo-base":{component:n.memo(n.lazy(function(){return t.e(570).then(t.bind(t,59363))})),asset:{type:"BLOCK",id:"button-demo-base",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:t(40565).Z},react:{type:"NPM",value:"18.3.1"},"hara-ui":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u4E3B\u8981\u7C7B\u578B"},context:{react:o||(o=t.t(n,2)),"hara-ui":d},renderOpts:{compile:function(){var i=m()(u()().mark(function h(){var p,y=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(19).then(t.bind(t,4019));case 2:return e.abrupt("return",(p=e.sent).default.apply(p,y));case 3:case"end":return e.stop()}},h)}));function v(){return i.apply(this,arguments)}return v}()}}}},80140:function(l,a,t){t.r(a),t.d(a,{Button:function(){return s}});var o=t(67294),r=t(85893),u=function(n){var c=n.variant,d=c===void 0?"primary":c,I=n.children,i=n.style,v=n.onClick;return(0,r.jsx)("button",{type:"button",className:"hara-btn ".concat(d?"hara-btn-"+d:""),style:i,onClick:v,children:I})},s=u},73120:function(l,a,t){t.r(a),t.d(a,{texts:function(){return r}});var o=t(4497);const r=[{value:"\u6309\u94AE\u7EC4\u4EF6\u7528\u4E8E\u89E6\u53D1\u4E00\u4E2A\u52A8\u4F5C\u6216\u4E8B\u4EF6\uFF0C\u5982\u63D0\u4EA4\u4E00\u4E2A\u8868\u5355\u3001\u6253\u5F00\u4E00\u4E2A\u5BF9\u8BDD\u6846\u3001\u53D6\u6D88\u4E00\u4E2A\u52A8\u4F5C\u6216\u6267\u884C\u4E00\u4E2A\u5220\u9664\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:`import { Button } from 'hara-ui';
`,paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u6309\u94AE\u7C7B\u578B",paraId:2,tocIndex:4},{value:'"primary" | "default"',paraId:2,tocIndex:4},{value:"default",paraId:2,tocIndex:4},{value:"style",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:2,tocIndex:4},{value:"React.CSSProperties",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"className",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onClick",paraId:2,tocIndex:4},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:2,tocIndex:4},{value:"(event: React.MouseEvent<HTMLButtonElement>) => void;",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4}]},40565:function(l,a){a.Z=`import React from 'react';
import { Button } from 'hara-ui';

export default () => {

  return (
    <>
      <Button variant="primary">\u9ED8\u8BA4\u6309\u94AE</Button> &nbsp;
      <Button variant="ghost">\u5E7D\u7075\u6309\u94AE</Button> &nbsp;
      <Button style={{color:'skyblue',backgroundColor:'whitesmoke'}}>\u81EA\u5B9A\u4E49\u6837\u5F0F</Button> &nbsp;
      <Button onClick={() => alert('\u70B9\u51FB\u4E8B\u4EF6')}>\u70B9\u51FB\u4E8B\u4EF6</Button>
    </>
  );
}
`}}]);
