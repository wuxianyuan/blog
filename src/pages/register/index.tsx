import { addUserApi, deleteAllUserApi } from '@/services';
import { Button, Divider, Form, Input, message, Space } from 'antd';
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
      if (res.code) {
        message.success(`用户${res.data.name}注册成功`);
      }
    });
    console.log(values);
  };
  const handleDelete = () => {
    deleteAllUserApi().then((res) => {
      if (res.code === 200) {
        message.success('请求成功');
      }
    });
  };
  return (
    <>
      <Space>
        <Button
          onClick={() => {
            form.submit();
          }}
        >
          注册
        </Button>
        <Button onClick={() => handleDelete()}>注销所有用户</Button>
      </Space>
      <Divider />
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
