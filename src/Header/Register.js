import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import RegisterUser from "../registerUser/registerUser";

const Register = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const body = {
    name: name,
    email: email,
    password: password,
  };
  const myChangeHandler = (event) => {
    setemail(event.target.value);
  };

  const myChangeHandlerpass = (event) => {
    setpassword(event.target.value);
  };

  const myChangeHandlerfirstname = (event) => {
    setname(event.target.value);
  };

  const Register = async (event) => {
    event.preventDefault();
    const response = await RegisterUser(body);
    if (response.status === 200) {
      alert(response.data.message);
      return props.history.push("/");
    }
  };

  return (
    <div>
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
            // onChange={handleConsent}
            label="*Agree to Terms and Conditions"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => Register(event)}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
