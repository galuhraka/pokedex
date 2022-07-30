import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import "./Loginpage.css";

const Loginpage = () => {
  let navigate = useNavigate();
  return (
    <div className="form">
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <form>
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="uname" required />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
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
                LOGIN
              </Button>
              <Button
                variant="outline-secondary"
                className="register-container"
                onClick={() => navigate("/register")}
              >
                REGISTER
              </Button>
            </Stack>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Loginpage;
