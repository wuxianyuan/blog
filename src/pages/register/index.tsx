import { addUserApi } from '@/services';
import { Button, Form, Input } from 'antd';
import { FC } from 'react';

type UseInfo = {
  name: string;
  email: string;
  password: string;
};
const Register: FC<any> = () => {
  const [form] = Form.useForm<UseInfo>();
  const handleFinish = (values: UseInfo) => {
    addUserApi(values).then((res) => {
      res;
      debugger;
    });
    console.log(values);
  };
  return (
    <>
      <Button
        onClick={() => {
          form.submit();
        }}
      >
        注册
      </Button>
      <Form onFinish={handleFinish} form={form}>
        <Form.Item name="name" label={'用户名'} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label={'密码'} rules={[{ required: true }]}>
          <Input type={'password'} />
        </Form.Item>
        <Form.Item name="email" label={'邮箱'} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};
export default Register;
