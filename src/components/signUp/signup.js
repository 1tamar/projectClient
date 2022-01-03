// import React, { useState } from "react";
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./signup.css";
// import im1 from '../Pictures/רקע.jpg';
// import LoginMethod from '../../services/SignupService';
// import SignupMethod from "../../services/SignupService";



// function mapStateToProps(state) {
//     return { ...state };
// }


// export default withRouter(connect(mapStateToProps)(function Signup(props) {
//     const { history } = props;

//     const [name,setName]=useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [ConfirmPassword, setConfirmPassword] = useState("");

//     async function trySignup() {
//         debugger;
//         const user = { name: name,Address:email, passward: password }
//         if (password == ConfirmPassword)
//         {
//             const data = await (SignupMethod.SignupUser(user));
//             if(data.Status==true)
//             {
//                 alert('שלום '+data.Data.Name);
//                 const currentUser=data.Data;
//                 history.push('./home');
//             }
//             else
//                 alert(data.Message);
//         }
//         else
//             alert("הסיסמא לא אושרה");
//     }


//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//     }
//     function handleSubmit(event) {
//         event.preventDefault();
//     }

//     return (
//         <>
//             <div class="Signup-body">

//                 <div class="form_signup">
//                     <Form onSubmit={handleSubmit}>
//                     <Form.Group size="lg" controlId="name" >
//                             <Form.Label>שם מלא</Form.Label>
//                             <Form.Control
//                                 autoFocus
//                                 type="email"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                             />
//                         </Form.Group>
//                         <Form.Group size="lg" controlId="email">
//                             <Form.Label>שם משתמש</Form.Label>
//                             <Form.Control
//                                 autoFocus
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </Form.Group>
                       
//                         <Form.Group size="lg" controlId="password">
//                             <Form.Label>סיסמא</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </Form.Group>
//                         <Form.Group size="lg" controlId="password">
//                             <Form.Label>אשר סיסמא</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 value={ConfirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                             />
//                         </Form.Group>
//                         <Button block size="lg" type="button" disabled={!validateForm()} onClick={trySignup}>
//                             הרשם
//                         </Button>
//                     </Form>
//                 </div>
                 
//              </div> 
//         </>
//     );
// }))


import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./signup.css";
import im1 from "../Pictures/רקע.jpg";
import LoginMethod from "../../services/SignupService";
import SignupMethod from "../../services/SignupService";

function mapStateToProps(state) {
  return { ...state };
}

export default withRouter(
  connect(mapStateToProps)(function Signup(props) {
    const { history } = props;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      debugger;
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };

    async function trySignup() {
      debugger;
      const user = { name: name, Address: email, passward: password };
      if (password == ConfirmPassword) {
        const data = await SignupMethod.SignupUser(user);
        if (data.Status == true) {
          alert("שלום " + data.Data.Name);
          const currentUser = data.Data;
          history.push("./home");
        } else alert(data.Message);
      } else alert("הסיסמא לא אושרה");
    }

    function validateForm() {
      return email.length > 0 && password.length > 0;
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
                  type="email"
                  value={name}
                  className="inputs"
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid" className="error">
                  {/* שדה חובה! */}
                </Form.Control.Feedback>
              </Form.Group>
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
              <Button
                block
                size="lg"
                type="submit"
                // disabled={!validateForm()}
                onClick={trySignup}
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
);
