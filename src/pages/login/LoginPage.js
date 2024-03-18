import { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import "./LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email) || !PWD_REGEX.test(password)) {
      return;
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmit}>
        <h2>Log in to your account</h2>

        <label className="position-relative">
          Enter your email address:
          <FaTimes
            className={EMAIL_REGEX.test(email) || !email ? "hide" : "invalid"}
          />
          <FaCheck
            className={EMAIL_REGEX.test(email) ? "valid ml-2" : "hide"}
          />
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p
            className={
              email && !EMAIL_REGEX.test(email) ? "instructions" : "hide"
            }
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              color="white"
              className="mr-2"
            />
            Please enter a valid email address.
          </p>
        </label>

        <label>
          Enter your password:
          <FaTimes
            className={
              PWD_REGEX.test(password) || !password ? "hide" : "invalid"
            }
          />
          <FaCheck
            className={PWD_REGEX.test(password) ? "valid ml-2" : "hide"}
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPwd(e.target.value)}
          />
          <p
            className={
              password && !PWD_REGEX.test(password) ? "instructions" : "hide"
            }
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              color="white"
              className="mr-2"
            />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
        </label>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
