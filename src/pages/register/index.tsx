import { addUserApi, testApi } from '@/services';
import { Button, Form, Input, message } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
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
      message.success(`用户${res.name}注册成功`);
    });
    console.log(values);
  };
  const handleTest = () => {
    testApi().then(() => {
      message.success('请求成功');
    });
  };
  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            form.submit();
          }}
        >
          注册
        </Button>
        <Button onClick={() => handleTest()}>接口测试</Button>
      </ButtonGroup>

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
