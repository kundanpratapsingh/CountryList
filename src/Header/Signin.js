import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isValid } from "../actions/isValid";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash";
import authenticateUser from "../verifyUser/authenticateUser";

function Signin(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [consent, setconsent] = useState(false);
  const [firstname, setfirstname] = useState("");
  const dispatch = useDispatch();

  const submitForm = async (event) => {
    event.preventDefault();
    const response = authenticateUser(username, firstname, password);
    response.then((res) => {
      const users = res.data;
      const Valid = _.some(users, { email: username, password: password });
      if (Valid && !consent) {
        alert("Please Accept Consent");
      } else if (Valid && consent && !_.isEmpty(firstname)) {
        props.history.push("/home");
        dispatch(isValid(firstname));
      } else {
        alert("Invalid User");
      }
    });
  };
  const myChangeHandler = (event) => {
    setusername(event.target.value);
  };

  const myChangeHandlerpass = (event) => {
    setpassword(event.target.value);
  };

  const myChangeHandlerfirstname = (event) => {
    setfirstname(event.target.value);
  };

  const handleConsent = () => {
    setconsent(!consent);
  };

  return (
    <div className="Container">
      <Form className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={myChangeHandlerfirstname}
            />
          </Form.Group>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={myChangeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={myChangeHandlerpass}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onChange={handleConsent}
            label="*Agree to Terms and Conditions"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => submitForm(event)}
        >
          Sign In
        </Button>
        <div className="QQQQQQQQ">
          <Link to={`/register`}>New User ? Register Here</Link>
        </div>
      </Form>
    </div>
  );
}

export default Signin;
