import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Button from './components/Button';
// @ts-ignore
import { history } from 'umi';
import { message } from 'antd';
import { loginApi } from '@/services';

export default function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit() {
    try {
      loginApi({ email, password }).then((res) => {
        localStorage.setItem('user', {
          ...res,
          expires: new Date().getTime() + 3600000,
        });
        message.success(`欢迎回来，${res.name}`);
      });

      history.push('/posts/home');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className="container lg:px-64 px-8 pt-16">
        <p className="text-3xl font-extrabold">用户登入</p>
        <div className="mt-8">
          <p>邮箱</p>
          <TextInput value={email} onChange={setEmail} />
          <p className="mt-4">密码</p>
          <TextInput password value={password} onChange={setPassword} />
          <Button onClick={submit}>登入</Button>
        </div>
      </div>
    </div>
  );
}
