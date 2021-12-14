import React, { useState } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginMethod from '../../services/LoginService';
import "./Login.css";
import im1 from '../Pictures/רקע.jpg';



function mapStateToProps(state) {
  return { login: { ...state.login } };
}




export default withRouter(connect(mapStateToProps)(function Login(props) {
  const {  history } = props;
  const [email, setEmail] = useState("");
  const [passward, setPassword] = useState("");

  async function tryLogin() {
    const user = { Address: email, passward: passward }
    const data = await (LoginMethod.LoginUser(user))
    alert(data.Messege);
    if(data.Status==true)
    {
      alert('שלום '+data.Data.Name);
      const currentUser=data.Data;//איך משתפים את הערך לכל הקומפוננטות?
      history.push('./home')
    }
  }
  function validateForm() {
    return email.length > 0 && passward.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function goToSignup() {
    history.push('./signup')
  }
  return (
    <div className="background-login">
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>שם משתמש</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>סיסמא</Form.Label>
            <Form.Control
              type="passward"
              value={passward}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="button" disabled={!validateForm()} onClick={tryLogin}>
            הכנס
          </Button>
          <Button block size="lg" type="button" onClick={goToSignup}>
            צור חשבון
          </Button>
        </Form>
      </div>
    </div>
  );
}))
