import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TextInputStyled } from "../../components/inputs/textInput/styledInput";
import { PasswordInputStyled } from "../../components/inputs/passwordInput/styledInput";
import "./LoginStyles.css";
import { logInUser } from "../../aws-utils/aws-utils";
import { publicCopies } from "../../ducks/publicCopies";
import { userData } from "../../ducks/userData";
import LoadCircle from "../../components/loadCircle/LoadCircle";
import Decoration1 from "../../assets/decoration-1-login.svg";
import Decoration2 from "../../assets/decoration-2-login.svg";
import Decoration3 from "../../assets/decoration-3-login.svg";
import MDecoration1 from "../../assets/mobile-decoration-1.svg";
import MDecoration2 from "../../assets/mobile-decoration-2.svg";
import MDecoration3 from "../../assets/mobile-decoration-3.svg";
import worldIcon from "../../assets/world-icon.svg";
import logoSotrux from "../../assets/sotrux-logo.svg";
const Login = () => {
  const [language, setLangugage] = useState("EN");
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const [inputs, setInputs] = useState({});
  const windowCopies = useSelector((state) => state.publicWindows.login);
  const dispatch = useDispatch();
  const handleChange = (input) => {
    const name = input.name;
    let value = input.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const login = await logInUser(inputs.email, inputs.password);
    if (login.data) {
      await dispatch(userData());
      history("/");
    } else {
      setLoginFail(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    const callCopies = async () => {
      await dispatch(publicCopies("login"));
      await setLoading(false);
    };
    callCopies();
  }, []);

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
          <div className={`containerForm`}>
            {loading || !windowCopies ? (
              <LoadCircle />
            ) : (
              <>
                <div className={`divTitle`}>
                  <div className="language-options">
                    <p>{language}</p>
                    <img src={worldIcon} alt="language-icon" />
                    <div className="languages-list">
                      <p
                        onClick={() => {
                          setLangugage("ES");
                        }}
                      >
                        ES
                      </p>
                      <p
                        onClick={() => {
                          setLangugage("EN");
                        }}
                      >
                        EN
                      </p>
                    </div>
                  </div>
                  <h2 className={`title`}>{windowCopies[language].title1}</h2>
                  <p className={`sub1`}>{windowCopies[language].title2}</p>
                  <p className={`sub2`}>{windowCopies[language].title3}</p>
                </div>
                <form className={`form`} onSubmit={onSubmit}>
                  <TextInputStyled
                    type="email"
                    name="email"
                    placeHolder={windowCopies[language].email}
                    error={false}
                    readOnly={true}
                    onChangeFunction={handleChange}
                  />

                  <PasswordInputStyled
                    name="password"
                    type="password"
                    placeHolder={windowCopies[language].password}
                    onChangeFunction={handleChange}
                  />

                  <p className="login_fail_message">{loginFail ? windowCopies[language].failMessage : ""}</p>
                  <div className={`divFooterForm`}>
                    <Link className={`LinkStyle`} to={"/recoverPassword"}>
                      {windowCopies[language].forgotPassword}
                    </Link>

                    <input
                      className={`buttonSubmit`}
                      type="submit"
                      onClick={onSubmit}
                      value={windowCopies[language].loginButton}
                      disabled={false}
                    />
                  </div>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
