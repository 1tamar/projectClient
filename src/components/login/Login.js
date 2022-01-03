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




// export default withRouter(connect(mapStateToProps)(function Login(props) {
//   const {  history } = props;
//   const [email, setEmail] = useState("");
//   const [passward, setPassword] = useState("");

//   async function tryLogin() {
//     const user = { Address: email, passward: passward }
//     const data = await (LoginMethod.LoginUser(user))
//     alert(data.Messege);
//     if(data.Status==true)
//     {
//       alert('שלום '+data.Data.Name);
//       const currentUser=data.Data;//איך משתפים את הערך לכל הקומפוננטות?
//       history.push('./home')
//     }
//   }
//   function validateForm() {
//     return email.length > 0 && passward.length > 0;
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//   }
//   function goToSignup() {
//     history.push('./signup')
//   }
//   return (
//     <div className="background-login">
//       <div className="Login">
//         <Form onSubmit={handleSubmit}>
//           <Form.Group size="lg" controlId="email">
//             <Form.Label>שם משתמש</Form.Label>
//             <Form.Control
//               autoFocus
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group size="lg" controlId="password">
//             <Form.Label>סיסמא</Form.Label>
//             <Form.Control
//               type="passward"
//               value={passward}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>
//           <Button block size="lg" type="button" disabled={!validateForm()} onClick={tryLogin}>
//             הכנס
//           </Button>
//           <Button block size="lg" type="button" onClick={goToSignup}>
//             צור חשבון
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// }))


// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import LoginMethod from "../../services/LoginService";
// import "./Login.css";
// import im1 from "../Pictures/רקע.jpg";

// function mapStateToProps(state) {
//   return { login: { ...state.login } };
// }

export default withRouter(
  connect(mapStateToProps)(function Login(props) {
    const { history } = props;
    const [email, setEmail] = useState("");
    const [passward, setPassword] = useState("");
    const [validated, setValidated] = useState(false);//

    const handleSubmit = (event) => {
      debugger;
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };

    async function tryLogin() {
      const user = { Address: email, passward: passward };
      const data = await LoginMethod.LoginUser(user);
      // alert(data.Messege);
      if (data.Status == true) 
      {
        alert("שלום " + data.Data.Name);
        const currentUser = data.Data; //איך משתפים את הערך לכל הקומפוננטות?
        history.push("./home");        
      }
    }
    function validateForm() {
      return email.length > 0 && passward.length > 0;
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
              // disabled={!validateForm()}
              onClick={tryLogin}
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
);