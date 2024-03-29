import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loginUrl, logoUrl } from "../utils/image";
import { saveUser } from "../utils/localStorage";
import { showError } from "../redux/features/users/userSlice";
import { IProps } from "../utils/types";

const Login = () => {
  const [email, setEmail] = useState("");
  const { error } = useAppSelector((state): IProps => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { loginUsers } = useAppSelector((state) => state.user);

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter" || e.code !== undefined) {
      handleSubmit(e);
    }
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(showError(false));

    if (!email) {
      setErrors("this field is required");
      setEmailError(true);
      return;
    }

    if (
      email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ) === null
    ) {
      setErrors("Please enter a valid email");
      setEmailError(true);
      return;
    }

    if (email) {
      setErrors("");
      setEmailError(false);
    }

    if (!password) {
      setErrors("This field is required");
      setPasswordError(true);
      return;
    }

    if (password) {
      setErrors("");
      setPasswordError(false);
    }

    setEmail("");
    setPassword("");

    const checkUser = () => loginUsers.find((item) => item.email === email);

    if (!checkUser()) {
      setErrors(
        "Invalid user details, please use this dummy email and a random password to login: Mathias_Gottlieb66@gmail.com"
      );
      return;
    }

    let avatar = checkUser()!.profile.avatar;
    let id = checkUser()!.id;
    let name = checkUser()!.userName;

    saveUser(id, name, email, avatar);
    navigate("/dashboard");
  };
  return (
    <>
      {error ? (
        <p className="text-danger text-center fs-6 my-2 font-weight-bold">
          Please login before accessing the users page or dashboard, use this
          email: Mathias_Gottlieb66@gmail.com and a random password
        </p>
      ) : null}
      <div className="grid-container">
        <div className="title-container">
          <div className="title-container-head">
            <img src={logoUrl} alt="title-logo" className="head-image" />
          </div>
          <img
            src={loginUrl}
            alt="login-icon-svg"
            className="title-container-image"
          />
        </div>
        <div className="welcome-container">
          <div className="welcome-container-head">
            <div className="mb-2">
              <h1 className="color-text font-weight-bold text-capitalize">
                Welcome!
              </h1>
              <p>Enter details to login</p>
            </div>
            <div className="welcome-container-body">
              <p className="errors text-danger fs-6">{errors}</p>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="form-control mb-4 mt-4 input-box"
                style={{
                  border: `${emailError ? "1px solid crimson" : ""}`,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form-group">
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="password"
                    className="form-control mb-4 input-box"
                    value={password}
                    style={{
                      border: `${passwordError ? "1px solid crimson" : ""}`,
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="btn btn-link input-btn text-uppercase"
                    onClick={handleShowPassword}
                    type="button"
                  >
                    {showPassword ? "hide" : "show"}
                  </button>
                </div>
              </div>

              <div>
                <h5 className="forgot-password mb-3">Forgot Password?</h5>
              </div>

              <div className="d-grid gap-2 col-12 mx-auto">
                <button
                  type="button"
                  onKeyDown={handleEnterKeyPress}
                  onClick={handleSubmit}
                  className="btn btn-primary text-uppercase font-weight-bold fs-4"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
