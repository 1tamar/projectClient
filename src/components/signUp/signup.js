import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./signup.css";
import im1 from "../Pictures/רקע.jpg";
import LoginMethod from "../../services/SignupService";
import SignupMethod from "../../services/SignupService";



export default withRouter(
  function Signup(props) {

    const { history } = props;
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === true) {
        trySignup();
      }
      setValidated(true);
    };

    async function trySignup() {
      debugger;
      const user = { name: name, Address: email, Passward: password };
      if (password == ConfirmPassword) {
        const data = await SignupMethod.SignupUser(user);
        if (data.Status == true) {
          
          dispatch({ type: "SET_CURRENT_USER", payload: data.Data });
          alert(data.Messege);
          history.push("./home");
        } else alert(data.Messege);
      }
      else alert("סיסמא לא תואמת");
    }

    return (
      <>
        <div class="Signup-body">
          <div class="form_signup">
            <Form
              onSubmit={handleSubmit}
              className="form"
              noValidate
              validated={validated}
            >

              {/* name */}
              <Form.Group
                size="lg"
                // controlId="name"
                className="formGroup"
                controlId="validationCustom01"
              >
                <Form.Label className="formLable">שם מלא</Form.Label>
                <Form.Control
                  required
                  autoFocus
                  //type="מש"
                  value={name}
                  className="inputs"
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid" className="error">
                  {/* שדה חובה! */}
                </Form.Control.Feedback>
              </Form.Group>
              {/* email */}
              <Form.Group
                size="lg"
                // controlId="email"
                className="formGroup"
                controlId="validationCustom02"
              >
                <Form.Label className="formLable">שם משתמש</Form.Label>
                <Form.Control
                  required
                  autoFocus
                  type="email"
                  value={email}
                  className="inputs"
                  onChange={(e) => setEmail(e.target.value)}

                  className="name-and-password-input"
                />
                <Form.Control.Feedback type="invalid" className="error">
                  {/* שדה חובה! */}
                </Form.Control.Feedback>
              </Form.Group>
              {/* password */}
              <Form.Group
                size="lg"
                // controlId="password"
                className="formGroup"
                controlId="validationCustom03"
              >
                <Form.Label className="formLable">סיסמא</Form.Label>
                <Form.Control
                  required
                  type="password"
                  value={password}
                  className="inputs"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid" className="error">
                  {/* שדה חובה! */}
                </Form.Control.Feedback>
              </Form.Group>
              {/* confirm password */}
              <Form.Group
                size="lg"
                // controlId="password"
                className="formGroup"
                controlId="validationCustom04"
              >
                <Form.Label className="formLable">אשר סיסמא</Form.Label>
                <Form.Control
                  required
                  type="password"
                  value={ConfirmPassword}
                  className="inputs"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid" className="error">
                  {/* שדה חובה! */}
                </Form.Control.Feedback>
              </Form.Group>
              {/* submit */}
              <Button
                block
                size="lg"
                type="submit"
                className="sign"
              >
                הרשם
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  })

