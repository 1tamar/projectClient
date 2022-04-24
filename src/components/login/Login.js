import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.css";
import LoginMethod from '../../services/LoginService';
import im1 from '../Pictures/רקע.jpg';


export default withRouter(
  function Login(props) {
    const dispatch = useDispatch()
    const { history } = props;

    const [email, setEmail] = useState("");
    const [passward, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      debugger;
      const form = event.currentTarget;
      if (form.checkValidity() === true) {
        tryLogin();
      }
      setValidated(true);
    };

    async function tryLogin() {
      const user = { Address: email, Passward: passward };
      const data = await LoginMethod.LoginUser(user);
      debugger;
      if (data.Status == true) {
        dispatch({ type: "SET_CURRENT_USER", payload: data.Data });
        history.push("./home");
      }
      else {
        alert(data.Messege);
      }
    }

    function goToSignup() {
      history.push("./signup");
    }

    return (
      <div className="background-login">
        <div className="Login">
          <Form
            onSubmit={handleSubmit}
            className="form"
            noValidate
            validated={validated}
          >
            <Form.Group
              size="lg"
              // type="email"
              controlId="validationCustom01"
            >
              <Form.Label className="name-and-password">שם משתמש</Form.Label>
              <Form.Control
                required
                className="name-and-password-input"
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid" className="error">
                כתובת המייל אינה תקינה!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              size="lg"
              // controlId="password"
              controlId="validationCustom02"
            >
              <Form.Label className="name-and-password">סיסמא</Form.Label>
              <Form.Control
                required
                className="name-and-password-input"
                type="password"
                value={passward}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid" className="error">
                שדה חובה!
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              block
              size="lg"
              type="submit"
              className="enter"
            >
              הכנס
            </Button>
            <div className="buttons">
              <Button
                block
                size="lg"
                type="button"
                onClick={goToSignup}
                className="create"
              >
                צור חשבון
              </Button>
            </div>
            <div className="buttons forgot">
              <Button
                block
                size="lg"
                type="button"
                onClick={goToSignup}
                className="create"
              >
                שכחתי סיסמא
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  })