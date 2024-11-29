import {
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
        <CardTitle>创建一个项目</CardTitle>
        <CardDescription>一键部署你的新项目</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div style={{display:'grid',width:'100%',gap:'10px'}}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <label htmlFor="name">项目名称</label>
              <Input id="name" type="text" placeholder="您的项目名称" />
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <label htmlFor="framework">框架</label>
              <Select>
                <SelectTrigger>选择您的项目框架</SelectTrigger>
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
        <Button variant="outline">退出</Button>
        <Button variant="primary">创建</Button>
      </CardFooter>
    </Card>
  );
};
