"use strict";(self.webpackChunkhara_ui=self.webpackChunkhara_ui||[]).push([[745],{54566:function(t,e,n){var o;n.r(e),n.d(e,{demos:function(){return D}});var d=n(17061),u=n.n(d),p=n(17156),l=n.n(p),r=n(67294),x=n(97296),c=n(4504),D={"dropdownmenu-demo-demo":{component:r.memo(r.lazy(function(){return n.e(211).then(n.bind(n,65744))})),asset:{type:"BLOCK",id:"dropdownmenu-demo-demo",refAtomIds:["DropdownMenu"],dependencies:{"index.tsx":{type:"FILE",value:n(5819).Z},"hara-ui":{type:"NPM",value:"0.0.15"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"DropdownMenu \u793A\u4F8B"},context:{"hara-ui":c,react:o||(o=n.t(r,2))},renderOpts:{compile:function(){var M=l()(u()().mark(function s(){var I,m=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(19).then(n.bind(n,4019));case 2:return a.abrupt("return",(I=a.sent).default.apply(I,m));case 3:case"end":return a.stop()}},s)}));function v(){return M.apply(this,arguments)}return v}()}}}},61311:function(t,e,n){n.r(e),n.d(e,{texts:function(){return d}});var o=n(97296);const d=[{value:"\u5411\u7528\u6237\u663E\u793A\u7531\u6309\u94AE\u89E6\u53D1\u7684\u83DC\u5355\uFF0C\u4F8B\u5982\u4E00\u7EC4\u64CD\u4F5C\u6216\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from 'hara-ui';
`,paraId:1,tocIndex:4},{value:`<DropdownMenu>
  <DropdownMenuTrigger>\u4E0B\u62C9\u83DC\u5355\u6807\u9898</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>\u5C0F\u6807\u9898</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>\u9009\u98791</DropdownMenuItem>
    <DropdownMenuItem>\u9009\u98792</DropdownMenuItem>
    <DropdownMenuItem>\u9009\u98793</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
`,paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u5FC5\u9009",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"\u63CF\u8FF0",paraId:3,tocIndex:7},{value:"style",paraId:3,tocIndex:7},{value:"React.CSSProperties",paraId:3,tocIndex:7},{value:"\u5426",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:3,tocIndex:7},{value:"className",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"\u5426",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:3,tocIndex:7},{value:"\u5C5E\u6027",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u5FC5\u9009",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"\u63CF\u8FF0",paraId:4,tocIndex:8},{value:"style",paraId:4,tocIndex:8},{value:"React.CSSProperties",paraId:4,tocIndex:8},{value:"\u5426",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:8},{value:"className",paraId:4,tocIndex:8},{value:"string",paraId:4,tocIndex:8},{value:"\u5426",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:8},{value:"\u5C5E\u6027",paraId:5,tocIndex:9},{value:"\u7C7B\u578B",paraId:5,tocIndex:9},{value:"\u5FC5\u9009",paraId:5,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:9},{value:"\u63CF\u8FF0",paraId:5,tocIndex:9},{value:"onClick",paraId:5,tocIndex:9},{value:"() => void",paraId:5,tocIndex:9},{value:"\u5426",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:5,tocIndex:9},{value:"style",paraId:5,tocIndex:9},{value:"React.CSSProperties",paraId:5,tocIndex:9},{value:"\u5426",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:9},{value:"className",paraId:5,tocIndex:9},{value:"string",paraId:5,tocIndex:9},{value:"\u5426",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:9}]},5819:function(t,e){e.Z=`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'hara-ui';
import React from 'react';

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>\u7528\u6237\u8BBE\u7F6E</DropdownMenuTrigger>
      <DropdownMenuContent style={{ width: '120px' }}>
        <DropdownMenuLabel>\u6211\u7684\u8D26\u53F7</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>\u4E2A\u4EBA\u4FE1\u606F</DropdownMenuItem>
        <DropdownMenuItem>\u9000\u51FA\u767B\u5F55</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            alert('\u771F\u7684\u6CA1\u6709\u554A');
          }}
        >
          \u6B64\u5904\u5565\u4E5F\u6CA1\u6709
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuDemo;
`}}]);
