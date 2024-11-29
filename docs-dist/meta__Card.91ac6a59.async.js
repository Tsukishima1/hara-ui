"use strict";(self.webpackChunkhara_ui=self.webpackChunkhara_ui||[]).push([[9477],{21772:function(l,t,e){var a;e.r(t),e.d(t,{demos:function(){return m}});var r=e(17061),o=e.n(r),i=e(17156),s=e.n(i),d=e(67294),h=e(40445),c=e(11045),m={"card-demo-demo":{component:d.memo(d.lazy(function(){return e.e(1058).then(e.bind(e,70324))})),asset:{type:"BLOCK",id:"card-demo-demo",refAtomIds:["Card"],dependencies:{"index.tsx":{type:"FILE",value:e(4539).Z},"hara-ui":{type:"NPM",value:"0.0.18"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Card \u793A\u4F8B"},context:{"hara-ui":c,react:a||(a=e.t(d,2))},renderOpts:{compile:function(){var C=s()(o()().mark(function p(){var u,y=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,y));case 3:case"end":return n.stop()}},p)}));function _(){return C.apply(this,arguments)}return _}()}}}},48990:function(l,t,e){e.r(t),e.d(t,{texts:function(){return r}});var a=e(40445);const r=[{value:"\u5361\u7247\u7EC4\u4EF6\u7528\u4E8E\u5C55\u793A\u4E00\u7EC4\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u901A\u5E38\u7528\u4E8E\u5C55\u793A\u5217\u8868\u9879\u3001\u6587\u7AE0\u7B49\u3002",paraId:0,tocIndex:0},{value:`import { Card } from 'hara-ui';
`,paraId:1,tocIndex:4},{value:`<Card>
  <CardHeader>
    <CardTitle></CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent></CardContent>
  <CardFooter></CardFooter>
</Card>
`,paraId:2,tocIndex:5}]},4539:function(l,t){t.Z=`import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from 'hara-ui';
import React from 'react';

export default () => {
  return (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE</CardTitle>
        <CardDescription>\u4E00\u952E\u90E8\u7F72\u4F60\u7684\u65B0\u9879\u76EE</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div style={{display:'grid',width:'100%',gap:'10px'}}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <label htmlFor="name">\u9879\u76EE\u540D\u79F0</label>
              <Input id="name" type="text" placeholder="\u60A8\u7684\u9879\u76EE\u540D\u79F0" />
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <label htmlFor="framework">\u6846\u67B6</label>
              <Select>
                <SelectTrigger>\u9009\u62E9\u60A8\u7684\u9879\u76EE\u6846\u67B6</SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter style={{ justifyContent: 'space-between' }}>
        <Button variant="outline">\u9000\u51FA</Button>
        <Button variant="primary">\u521B\u5EFA</Button>
      </CardFooter>
    </Card>
  );
};
`}}]);
