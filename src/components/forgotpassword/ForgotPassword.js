import React, { useEffect, useRef, useState } from "react";
import "./ForgotPassword.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from 'axios';
import env from './../../application/environment/env.json';
export default function ForgotPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const emailRef = useRef()
  const [emailInputError, setEmailInputError] = useState(false)
  const SentEmail = () => {  
   if (!email) {
    setEmailError(true)
    emailRef.current.focus()
    }else if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    )
  ) {
    setEmailInputError(true)
  }
  }
  return (
    
    <>
      <div className="forgotPassword__container">
        <div className="forgotPassword__content">
          <form onSubmit={e=>e.preventDefault()}>
            <div class="signin__head-header signup__head">
              <div class="signin__head-header-wrapper">
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    margin: "0px",
                    color: "hsl(var(--hue-color), 4%, 75%)",
                    height: "16px",
                  }}
                >
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ margin: "0px 10px 0px 0px", cursor: "pointer" }}
                  >
                    <g
                      id="icons-48-system-chevron_left"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <rect
                        id="shape"
                        x="0"
                        y="0"
                        width="48"
                        height="48"
                      ></rect>
                      <path
                        d="M33.1764706,46.2857143 C32.6321029,46.2845343 32.111597,46.0621363 31.7344538,45.6695799 L12.7260504,25.3109244 C12.0701111,24.5600529 12.0701111,23.4399471 12.7260504,22.6890756 L31.7344538,2.34352937 C32.2145107,1.82834638 32.9329484,1.60840497 33.6191384,1.76655492 C34.3053283,1.92470488 34.855022,2.43691946 35.0611552,3.1102524 C35.2672883,3.78358534 35.0985443,4.51574135 34.6184874,5.03092433 L16.8554622,24 L34.6184874,42.9821849 C34.9698843,43.3679945 35.1535103,43.877662 35.128922,44.3989337 C35.1043337,44.9202053 34.8735479,45.4103251 34.487395,45.7613446 C34.1332154,46.0968138 33.6643036,46.2843785 33.1764706,46.2857143 Z"
                        id="Mask"
                        fill="currentColor"
                        fill-rule="nonzero"
                      ></path>
                    </g>
                  </svg>
                </a>
                {t("FORGOTDATA")}
              </div>       
            </div>
            <div className="signup__block-2elements">
            <div className="form__div">
                    <input
                      type="text"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      className={
                        emailError || emailInputError
                          ? 'form__input error__input__container'
                          : 'form__input'
                      }
                      ref={emailRef}
                      placeholder=" "
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (email.length < 0) {
                          setEmailError(true)
                        } else {
                          setEmailError(false)
                          setEmailInputError(false)
                        }
                      }}
                    />
                    <label
                      for=""
                      className={
                        emailError || emailInputError
                          ? 'form__label error__label__container'
                          : 'form__label'
                      }
                    >
                      {t('EMAILINPUT')}
                    </label>
                    {emailError && (
                      <div className="error__div__container">
                        <span className="error__div__container__span">
                          {t('REQUIREDFILL')}
                        </span>
                      </div>
                    )}
                    {emailInputError && (
                      <div className="error__div__container">
                        <span
                          className="error__div__container__span"
                          style={{ marginLeft: '5px', width: '200px' }}
                        >
                          არასწორი ფორმატი
                        </span>
                      </div>
                    )}
                  </div>
                  </div>
                  <div
                  className="form__buttonContainer signup__button-box"
                  style={{ marginTop: '35px' }}
                >
                  {/* <Link to="/forgotpasswordv2"> */}
                    <button
                      className="form__signinButton signup__button1"
                      onClick={() => SentEmail()}
                    >
                      {t("CONTINUE")}
                    </button>
                  {/* </Link> */}
                </div>{' '}
          </form>
        </div>
      </div>
    </>
  );
}