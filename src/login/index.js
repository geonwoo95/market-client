import React from "react";
import { Divider, Button, Form, Input, message } from "antd";
import { useHistory } from "react-router-dom";
import { API_URL } from "../config/constants";
import { useUser } from "../UserContext";
import "./index.css";

function LoginPage() {
  const history = useHistory();
  const { loginUser } = useUser();
  const [form] = Form.useForm(); // form을 사용하기 위해 Form.useForm() 훅 호출

  const onFinish = async (values) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.text();
        if (result === "로그인 성공!") {
          console.log(result);
          message.info("로그인 성공!");
          loginUser({ name: values.username });
          history.replace("/");
        } else {
          console.log(result);
        }
      } else {
        console.log("서버로부터 응답을 받지 못했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const values = await form.validateFields(); // form의 값을 검증하여 가져옴
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.text();
        if (result === "로그인 성공!") {
          console.log(result);
          message.info("로그인 성공!");
          loginUser({ name: values.username });
          history.replace("/");
        } else {
          console.log(result);
        }
      } else {
        console.log("서버로부터 응답을 받지 못했습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="login-container">
      <h1>로그인 페이지</h1>
      <Divider />
      <Form
        name="normal_login"
        className="login-form"
        form={form} // form 훅을 Form 컴포넌트에 연결
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "아이디를 입력해주세요.",
            },
          ]}
        >
          <Input
            className="site-form-item-icon"
            size="large"
            placeholder="아이디를 입력해주세요."
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요.",
            },
          ]}
        >
          <Input
            className="site-form-item-icon"
            size="large"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleLogin}>로그인</Button>
          Or <a href="./signup">회원가입</a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
