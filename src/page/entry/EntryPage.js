import React from "react";
import "./EntryStyle.css";
import { Container } from "react-bootstrap";
import LoginComp from "../../components/login/LoginComp";
import ResetPassword from "../../components/password-reset/PasswordReset";
import { useState } from "react";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formload, setFormLoad] = useState("Login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // setEmail(name === "email" ? value : email);
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill in all the fields");
    }
    console.log(email, password);
  };

   const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email ) {
      return alert("Please enter the email");
    }
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <Container className="p-5 w-25 bg-light rounded custom-box">
        {formload === "Login" && (
          <LoginComp
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}
        {formload === "Reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email}
            handleOnResetSubmit={handleOnResetSubmit}
          />
        )}
      </Container>
    </div>
  );
};
