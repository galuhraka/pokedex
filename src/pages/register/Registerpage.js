import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import "./Registerpage.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../Auth/Firebase";

const Registerpage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const inputEmailHandler = (event) => {
    setCredentials({ ...credentials, email: event.target.value });
  };
  const inputPasswordHandler = (event) => {
    setCredentials({ ...credentials, password: event.target.value });
  };
  const registerSubmitHandler = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(credentials.email, credentials.password);
  };

  useEffect(() => {
    if (user) {
      setCredentials({ ...credentials, email: "", password: "" });
      navigate("/");
    }
  }, [user, navigate, credentials]);

  return (
    <div className="form">
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <form onSubmit={registerSubmitHandler}>
            <div className="input-container">
              <label>Email </label>
              <input
                type="email"
                name="uname"
                required
                onChange={inputEmailHandler}
                value={credentials.email}
              />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                required
                onChange={inputPasswordHandler}
                value={credentials.password}
              />
              {/* {renderErrorMessage("pass")} */}
            </div>
            {/* <div className="button-container">
              <input type="submit" />
            </div> */}
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button
                className="login-container"
                variant="secondary"
                type="submit"
              >
                {loading ? 'LOADING...' : 'REGISTER'}
              </Button>
              <Button
                variant="outline-secondary"
                className="register-container"
                onClick={() => navigate("/login")}
              >
                LOGIN
              </Button>
            </Stack>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Registerpage;
