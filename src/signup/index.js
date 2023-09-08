import { Divider, Form, Input, Button, message } from "antd";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../config/constants";
import "./index.css";

function SignupPage() {
  const history = useHistory();

  const onSubmit = (values) => {
    if (values.password !== values.passwordconfirm) {
      alert("비밀번호를 확인해주세요");
      return;
    } else
      axios
        .post(`${API_URL}/signup`, {
          username: values.username,
          name: values.name,
          email: values.email,
          password: values.password,
          passwordconfirm: values.passwordconfirm,
        })
        .then((result) => {
          console.log(result);
          message.info("회원가입이 완료되었습니다");
          history.replace("/login");
        })
        .catch((error) => {
          console.error(error);
          message.error(`에러가 발생했습니다. ${error.message}`);
        });
  };
  return (
    <div>
      <Form name="회원가입" onFinish={onSubmit}>
        <h1>회원가입 페이지</h1>
        <Divider />
        <Form.Item
          label={<div className="signup-label">아이디</div>}
          name="username"
          rules={[{ required: true, message: "아이디를 입력해주세요" }]}
        >
          <Input
            className="signup-username"
            size="large"
            placeholder="아이디를 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="signup-label">이름</div>}
          name="name"
          rules={[{ required: true, message: "이름를 입력해주세요" }]}
        >
          <Input
            className="signup-username"
            size="large"
            placeholder="이름을 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="signup-label">이메일 주소</div>}
          name="email"
          rules={[{ required: true, message: "이메일을 입력해주세요" }]}
        >
          <Input
            className="signup-username"
            size="large"
            placeholder="이메일을 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="signup-label">비밀번호</div>}
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
        >
          <Input
            className="signup-username"
            size="large"
            placeholder="비밀번호를 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="signup-label">비밀번호 확인</div>}
          name="passwordconfirm"
          rules={[{ required: true, message: "한번더 입력해주세요" }]}
        >
          <Input
            className="signup-username"
            size="large"
            placeholder="비밀번호를 입력해주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            회원가입 완료
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default SignupPage;
