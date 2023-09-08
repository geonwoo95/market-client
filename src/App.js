import React from "react";
import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { UserProvider, useUser } from "./UserContext";
import ProductPage from "./product";
import UploadPage from "./upload";
import LoginPage from "./login";
import { Button, message } from "antd";
import { DownloadOutlined, UserOutlined } from "@ant-design/icons";
import SignupPage from "./signup";

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

function Header() {
  const history = useHistory();
  const { user, logoutUser } = useUser();

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleUploadClick = () => {
    if (user) {
      history.push("/upload");
    } else {
      message.warning("로그인을 먼저 해주세요.");
      history.push("/login");
    }
  };

  return (
    <div id="header">
      <div id="header-area">
        <Link to="/">
          <img src="/images/icons/logo.png" alt="logo" />
        </Link>
        <div id="header-loginbutton">
          <div className="welcome-text">
            {user ? <p>{`${user.name}님 환영합니다.`}</p> : null}
          </div>
          {user ? (
            <div className="logout-button">
              <Button size="large" onClick={() => logoutUser()}>
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="login-button">
              <Button
                id="singup-button"
                size="large"
                onClick={handleLoginClick}
                icon={<UserOutlined />}
              >
                로그인
              </Button>
            </div>
          )}
          <div className="upload-button">
            <Button
              size="large"
              onClick={handleUploadClick}
              icon={<DownloadOutlined />}
            >
              상품 업로드
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <div>
      <Header />
      <div id="body">
        <Switch>
          <Route exact path="/">
            <MainPageComponent />
          </Route>
          <Route exact path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact path="/upload">
            <UploadPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
