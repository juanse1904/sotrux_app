import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextInputStyled } from "../../components/inputs/textInput/styledInput";
import "./LoginStyles.css";
import { logInUser } from "../../aws-utils/aws-utils";
import LoadCircle from "../../components/loadCircle/LoadCircle";
import Decoration1 from "../../assets/decoration-1-login.svg";
import Decoration2 from "../../assets/decoration-2-login.svg";
import Decoration3 from "../../assets/decoration-3-login.svg";
import MDecoration1 from "../../assets/mobile-decoration-1.svg";
import MDecoration2 from "../../assets/mobile-decoration-2.svg";
import MDecoration3 from "../../assets/mobile-decoration-3.svg";
import worldIcon from "../../assets/world-icon.svg";
import logoSotrux from "../../assets/sotrux-logo.svg";
import loginCopy from "./loginCopy";
const Login = () => {
  const [language, setLangugage] = useState(0);
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const langs = ["ES", "EN"];
  const [inputs, setInputs] = useState({});
  const handleChange = (input) => {
    const name = input.name;
    let value = input.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const login = await logInUser(inputs.email, inputs.password);
    console.log("the repsonse of the login", login);
    history("/");
    setLoading(false);
  };

  return (
    <>
      <main className={`mainContainer`}>
        <div className="decoration1-login">
          <img src={Decoration1} alt="" />
        </div>
        <div className="decoration3-login">
          <img src={Decoration3} alt="" />
        </div>
        <div className="decoration2-login">
          <img src={Decoration2} alt="" />
        </div>
        <div className="logo1-login">
          <img src={logoSotrux} alt="" />
        </div>
        <div className="mobile-decoration1-login">
          <img src={MDecoration1} alt="" />
        </div>
        <div className="mobile-decoration2-login">
          <img src={MDecoration2} alt="" />
        </div>
        <div className="mobile-decoration3-login">
          <img src={MDecoration3} alt="" />
        </div>
        <section className="loginBox">
          <div className={`divTitle`}>
            <div className="language-options">
              <p>{langs[language]}</p>
              <img src={worldIcon} alt="language-icon" />
              <div className="languages-list">
                <p
                  onClick={() => {
                    setLangugage(0);
                  }}
                >
                  ES
                </p>
                <p
                  onClick={() => {
                    setLangugage(1);
                  }}
                >
                  EN
                </p>
              </div>
            </div>
            <h2 className={`title`}>{loginCopy[language].title}</h2>
            <p className={`sub1`}>{loginCopy[language].subtitle1}</p>
            <p className={`sub2`}>{loginCopy[language].subtitle2}</p>
          </div>
          <div className={`containerForm`}>
            {loading ? (
              <LoadCircle />
            ) : (
              <form className={`form`} onSubmit={onSubmit}>
                <TextInputStyled
                  type="email"
                  name="email"
                  placeHolder={loginCopy[language].email}
                  error={false}
                  onChangeFunction={handleChange}
                />

                <TextInputStyled
                  name="password"
                  type="password"
                  placeHolder={loginCopy[language].password}
                  onChangeFunction={handleChange}
                />

                <div className={`divFooterForm`}>
                  <Link className={`LinkStyle`} to={"/recoverPassword"}>
                    {loginCopy[language].recover}
                  </Link>

                  <input
                    className={`buttonSubmit`}
                    type="submit"
                    onClick={onSubmit}
                    value={loginCopy[language].button}
                    disabled={false}
                  />
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
