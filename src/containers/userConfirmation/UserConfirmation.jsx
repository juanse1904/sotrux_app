import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import TextInputStyled from '../../components/inputs/textInput/styledInput';
import PasswordInputStyled from '../../components/inputs/passwordInput/styledInput';
import NumberInputStyled from '../../components/inputs/numberInput/styledInput';
import { publicCopies } from '../../ducks/publicCopies';
import { confirmSignUp, newCode, updatePassword } from '../../aws-utils/aws-utils';
import './UserConfirmationStyles.css';
import LoadCircle from '../../components/loadCircle/LoadCircle';
import MDecoration1 from '../../assets/mobile-decoration-1.svg';
import MDecoration2 from '../../assets/mobile-decoration-2.svg';
import MDecoration3 from '../../assets/mobile-decoration-3.svg';
import worldIcon from '../../assets/world-icon.svg';

const Login = () => {
  const history = useNavigate();
  const [localEmail, setLocalEmail] = useState(' ');
  const [language, setLangugage] = useState('EN');
  const [loading, setLoading] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [length, setLength] = useState(false);
  const [inputs, setInputs] = useState({});
  const windowCopies = useSelector((state) => state.publicWindows.user_confirmation);
  const dispatch = useDispatch();
  const queryParams = useLocation().search;

  const handleChange = (input) => {
    const { name } = input;
    const { value } = input;
    if (name === 'password') {
      setUpperCase(false);
      setLowerCase(false);
      setNumber(false);
      setLength(false);
      const pwdArr = value.split('');
      pwdArr.forEach((character) => {
        if (/^[A-Z]*$/.test(character)) {
          setUpperCase(true);
        }
        if (/^[a-z]*$/.test(character)) {
          setLowerCase(true);
        }
        if (/[0123456789]/.test(character)) {
          setNumber(true);
        }
      });
      if (pwdArr.length >= 8) {
        setLength(true);
      }
    }

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const btnAvailable = upperCase && lowerCase && number && length;
  const onSubmit = async () => {
    setLoading(true);
    try {
      const verification = await confirmSignUp(localEmail, inputs.code);
      if (verification.$response?.httpResponse?.statusCode !== 200) {
        history('/validation-error');
        throw new Error('is not possible verificate the account');
      }
      const resetPassword = await updatePassword(inputs.email, inputs.password);
      if (resetPassword.$response?.httpResponse?.statusCode !== 200) {
        history('/validation-error');
        throw new Error('is not possible asign the password');
      }
      history('/validation-success');
    } catch (err) {
      console.error('something happened', err);
    }
    setLoading(false);
  };
  const resendCode = async () => {
    setLoading(true);
    try {
      const resend = await newCode(localEmail);
      if (resend.$response?.httpResponse?.statusCode !== 200) {
        history('/validation-error');
        throw new Error('was not possible resend the code, try again');
      } else {
        history('/resend-code-confirmation');
      }
    } catch (err) {
      console.error('something happened', err);
    }
    setLoading(false);
  };
  useEffect(() => {
    const callCopies = async () => {
      await dispatch(publicCopies('user_confirmation'));
      await setLoading(false);
    };
    callCopies();

    const decodeUrlParams = () => {
      const encodedParams = queryParams.split('?')[1];
      const decodeParams = JSON.parse(decodeURIComponent(escape(window.atob(encodedParams))));
      setLangugage(decodeParams.lng === 'es' ? 'ES' : 'EN');
      setLocalEmail(decodeParams.email);
    };
    decodeUrlParams();
  }, []);

  return (
    <main className="mainContainer">
      <div className="decoration1-confirm">
        <img src="https://sotrux-app.s3.amazonaws.com/decoration-1-confirm.svg" alt="" />
      </div>
      <div className="decoration2-confirm">
        <img src="https://sotrux-app.s3.amazonaws.com/decoration-2-confirm.svg" alt="" />
      </div>
      <div className="decoration3-confirm">
        <img alt="" src="https://sotrux-app.s3.amazonaws.com/decoration-3-confirm.svg" />
      </div>
      <div className="decoration4-confirm">
        <img alt="" src="https://sotrux-app.s3.amazonaws.com/decoration-4-confirm.svg" />
      </div>
      <div className="logo1-confirm">
        <img src="https://sotrux-app.s3.amazonaws.com/sotrux-logo.svg" alt="logo sotrux" />
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
      {loading || !windowCopies ? (
        <LoadCircle />
      ) : (
        <section className="loginBox">
          <div className="divTitle">
            <div className="language-options">
              <p>{language}</p>
              <img src={worldIcon} alt="language-icon" />
              <div className="languages-list">
                <button
                  type="button"
                  onClick={() => {
                    setLangugage('ES');
                  }}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLangugage('EN');
                  }}
                >
                  EN
                </button>
              </div>
            </div>
            <h2 className="title">{windowCopies[language].title}</h2>
            <p className="sub1">{windowCopies[language].title2}</p>
          </div>
          <div className="containerForm">
            <form className="form">
              <TextInputStyled
                type="email"
                name="email"
                placeHolder={windowCopies[language].email}
                error={false}
                value={localEmail}
                readOnly
                onChangeFunction={handleChange}
              />
              <NumberInputStyled
                type="text"
                name="code"
                placeHolder={windowCopies[language].validationCode}
                error={false}
                onChangeFunction={handleChange}
              />
              <button type="button" className="resend-button" onClick={resendCode}>
                {windowCopies[language].resendCode}
              </button>

              <PasswordInputStyled
                name="password"
                type="password"
                placeHolder={windowCopies[language].password}
                onChangeFunction={handleChange}
              />
              <div className="labels_container">
                <div className={`label_password${upperCase ? '_active' : '_unactive'}`}>
                  <p>{windowCopies[language].capitalLetter}</p>
                </div>
                <div className={`label_password${lowerCase ? '_active' : '_unactive'}`}>
                  <p>{windowCopies[language].lowerCase}</p>
                </div>
                <div className={`label_password${number ? '_active' : '_unactive'}`}>
                  <p>{windowCopies[language].number}</p>
                </div>
                <div className={`label_password${length ? '_active' : '_unactive'}`}>
                  <p>{windowCopies[language].characters}</p>
                </div>
              </div>
              <div className="divFooterForm">
                <div className="footerForm_checkbox">
                  <p>
                    {windowCopies[language].terms1Label}
                    <a href={windowCopies[language].terms1Link}>
                      {windowCopies[language].terms1Link}
                    </a>
                  </p>
                  <input type="checkbox" name="" id="" />
                </div>

                <div className="footerForm_checkbox">
                  <p>
                    {windowCopies[language].terms2Label}
                    <a href={windowCopies[language].terms2Link}>
                      {windowCopies[language].terms2Link}
                    </a>
                  </p>
                  <input type="checkbox" name="" id="" />
                </div>

                <button
                  type="button"
                  onClick={onSubmit}
                  className={`buttonSubmit ${btnAvailable ? '' : 'buttonDisabled'}`}
                  disabled={!btnAvailable}
                >
                  {windowCopies[language].confirmButton}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
};

export default Login;
