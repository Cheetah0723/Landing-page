import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import env from './../../application/environment/env.json'
function SignUpPages() {
  const [showSignUpNextPage, setShowSignUpNextPage] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const firstNameRef = useRef()
  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState(false)
  const lastNameRef = useRef()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const emailRef = useRef()
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const passwordRef = useRef()
  const [repeatPassword, setRepeatPassword] = useState('')
  const [repeatPasswordError, setRepeatPasswordError] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(false)
  const [emailInputError, setEmailInputError] = useState(false)
  const repeatPasswordRef = useRef()
  const length = 2
  const [gender, setGender] = useState('')
  const [userDateDay, setUserDateDay] = useState('1')
  const [userDateMonth, setUserDateMonth] = useState('jan')
  const [userDateYear, setUserDateYear] = useState('2010')
  const identificationFirstPage = () => {
    if (!firstName) {
      setFirstNameError(true)
      setRepeatPasswordError(false)
      setEmailError(false)
      setLastNameError(false)
      setPasswordError(false)
      setPasswordMatch(false)
      setEmailInputError(false)
      firstNameRef.current.focus()
    } else if (!lastName) {
      setLastNameError(true)
      setRepeatPasswordError(false)
      setEmailError(false)
      setFirstNameError(false)
      setPasswordError(false)
      setPasswordMatch(false)
      setEmailInputError(false)
      lastNameRef.current.focus()
    } else if (!email) {
      setEmailError(true)
      setFirstNameError(false)
      setLastNameError(false)
      setPasswordError(false)
      setRepeatPasswordError(false)
      setPasswordMatch(false)
      setEmailInputError(false)
      emailRef.current.focus()
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      )
    ) {
      setEmailInputError(true)
      setPasswordMatch(false)
    } else if (!password) {
      setPasswordError(true)
      setEmailError(false)
      setFirstNameError(false)
      setLastNameError(false)
      setRepeatPasswordError(false)
      setPasswordMatch(false)
      setEmailInputError(false)
      passwordRef.current.focus()
    } else if (!repeatPassword) {
      setRepeatPasswordError(true)
      setEmailError(false)
      setFirstNameError(false)
      setLastNameError(false)
      setPasswordError(false)
      setPasswordMatch(false)
      setEmailInputError(false)
      repeatPasswordRef.current.focus()
    } else if (password != repeatPassword) {
      setPasswordMatch(true)
      setRepeatPasswordError(false)
      setEmailError(false)
      setFirstNameError(false)
      setLastNameError(false)
      setPasswordError(false)
      setEmailInputError(false)
    } else {
      setRepeatPasswordError(false)
      setEmailError(false)
      setFirstNameError(false)
      setLastNameError(false)
      setPasswordError(false)
      setPasswordMatch(false)
      setEmailInputError(false)
      setShowSignUpNextPage(2)
    }
  }

  const pageBack = () => {
    if (showSignUpNextPage != 1) {
      setShowSignUpNextPage(1)
    }
  }

  const { pathname } = useLocation()

  const sendInformation = () => {
    const data = {
      userName: `${firstName} ${lastName}`,
      email: email,
      password: password,
      dateOfBirth: `${userDateDay}/${userDateMonth}/${userDateYear}`,
      gender: gender,
    }
    axios.post(`${env.host}/api/signup`, data).then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    document.body.style.overflowY = 'scroll'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  useEffect(() => {
    if (password == repeatPassword) {
      setPasswordMatch(false)
    }
  }, [password, repeatPassword])
  return (
    <>
      <div className="signup__centerbox">
        <div className="signup__mainbox">
          <form onSubmit={(e) => e.preventDefault()}>
            {showSignUpNextPage == 1 && (
              <>
                <div className="signin__head-header signup__head">
                  <div className="signin__head-header-wrapper">
                    {showSignUpNextPage == 1 ? (
                      <>
                        <Link
                          to="/"
                          style={{
                            textDecoration: 'none',
                            margin: '0',
                            color: 'hsl(var(--hue-color), 4%, 75%)',
                            height: '16px',
                          }}
                        >
                          <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 48 48"
                            style={{ margin: '0 10px 0 0', cursor: 'pointer' }}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
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
                        </Link>
                      </>
                    ) : (
                      <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 48 48"
                        style={{ margin: '0 10px 0 0', cursor: 'pointer' }}
                        version="1.1"
                        onClick={() => pageBack()}
                        xmlns="http://www.w3.org/2000/svg"
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
                    )}
                    პირადი ინფორმაცია ({showSignUpNextPage}/{length})
                  </div>
                </div>
                <div className="signup__block-2elements">
                  <div className="form__div">
                    <input
                      type="text"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      ref={firstNameRef}
                      className={
                        firstNameError
                          ? 'form__input error__input__container'
                          : 'form__input'
                      }
                      placeholder=" "
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value)
                        if (firstName.length < 0) {
                          setFirstNameError(true)
                        } else {
                          setFirstNameError(false)
                        }
                      }}
                    />
                    <label
                      for=""
                      className={
                        firstNameError
                          ? 'form__label error__label__container'
                          : 'form__label'
                      }
                    >
                      სახელი
                    </label>
                    {firstNameError && (
                      <div className="error__div__container">
                        <span className="error__div__container__span">
                          სავალდებულო ველი
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="form__div">
                    <input
                      type="text"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      className={
                        lastNameError
                          ? 'form__input error__input__container'
                          : 'form__input'
                      }
                      ref={lastNameRef}
                      placeholder=" "
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value)
                        if (lastName.length < 0) {
                          setLastNameError(true)
                        } else {
                          setLastNameError(false)
                        }
                      }}
                    />
                    <label
                      for=""
                      className={
                        lastNameError
                          ? 'form__label error__label__container'
                          : 'form__label'
                      }
                    >
                      გვარი
                    </label>
                    {lastNameError && (
                      <div className="error__div__container">
                        <span className="error__div__container__span">
                          სავალდებულო ველი
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="signup__block-1elements">
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
                      ელ-ფოსტა
                    </label>
                    {emailError && (
                      <div className="error__div__container">
                        <span className="error__div__container__span">
                          სავალდებულო ველი
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
                <div className="signup__block-2elements">
                  <div className="form__div">
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        if (password.length < 0) {
                          setPasswordError(true)
                        } else {
                          setPasswordError(false)
                        }
                      }}
                      type="password"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      className={
                        passwordError || passwordMatch
                          ? 'form__input error__input__container'
                          : 'form__input'
                      }
                      placeholder=" "
                      ref={passwordRef}
                    />
                    <label
                      for=""
                      className={
                        passwordError || passwordMatch
                          ? 'form__label error__label__container'
                          : 'form__label'
                      }
                    >
                      პაროლი
                    </label>
                    {passwordError && (
                      <div className="error__div__container">
                        <span className="error__div__container__span">
                          სავალდებულო ველი
                        </span>
                      </div>
                    )}
                    {passwordMatch && (
                      <div className="error__div__container">
                        <span className="error__div__container__span">
                          პაროლი არ ემთხვევა
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="form__div">
                    <input
                      type="text"
                      value={repeatPassword}
                      onChange={(e) => {
                        setRepeatPassword(e.target.value)
                        if (repeatPassword.length < 0) {
                          setRepeatPassword(true)
                        } else {
                          setRepeatPassword(false)
                        }
                      }}
                      type="password"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      className={
                        repeatPasswordError || passwordMatch
                          ? 'form__input error__input__container'
                          : 'form__input'
                      }
                      placeholder=" "
                      ref={repeatPasswordRef}
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <label
                      for=""
                      className={
                        repeatPasswordError || passwordMatch
                          ? 'form__label error__label__container'
                          : 'form__label'
                      }
                    >
                      გაიმეორეთ პაროლი
                    </label>
                    {repeatPasswordError && (
                      <div className="error__div__container">
                        <span className="error__div__container__span">
                          სავალდებულო ველი
                        </span>
                      </div>
                    )}
                    {passwordMatch && (
                      <div className="error__div__container">
                        <span className="error__div__container__span">
                          პაროლი არ ემთხვევა
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="form__buttonContainer signup__button-box">
                  <button
                    className="form__signinButton signup__button"
                    onClick={() => identificationFirstPage()}
                  >
                    განაგრძე რეგისტრაცია
                  </button>
                </div>
              </>
            )}
            {showSignUpNextPage == 2 && (
              <>
                <div className="signin__head-header signup__head">
                  <div className="signin__head-header-wrapper">
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 48 48"
                      style={{ margin: '0 10px 0 0', cursor: 'pointer' }}
                      version="1.1"
                      onClick={() => pageBack()}
                      xmlns="http://www.w3.org/2000/svg"
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
                    პირადი ინფორმაცია ({showSignUpNextPage}/{length})
                  </div>
                </div>
                <div className="signup__block-3elements">
                  <div
                    className="form__div"
                    onChange={(e) => {
                      setUserDateDay(e.target.value)
                    }}
                  >
                    <select name="day" size="1">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </div>
                  <div
                    className="form__div"
                    onChange={(e) => {
                      setUserDateMonth(e.target.value)
                    }}
                  >
                    <select name="month" size="1">
                      <option value="jan">იანვარი</option>
                      <option value="feb">თებერვალი</option>
                      <option value="mar">მარტი</option>
                      <option value="apr">აპრილი</option>
                      <option value="may">მაისი</option>
                      <option value="jun">ივნისი</option>
                      <option value="jul">ივლისი</option>
                      <option value="aug">აგვისტო</option>
                      <option value="sep">სექტემბერი</option>
                      <option value="oct">ოქტომბერი</option>
                      <option value="nov">ნოემბერი</option>
                      <option value="dec">დეკემბერი</option>
                    </select>
                  </div>
                  <div
                    className="form__div"
                    onChange={(e) => {
                      setUserDateYear(e.target.value)
                    }}
                  >
                    <select
                      ariaLabel="წელი"
                      name="year"
                      id="year"
                      title="წელი"
                      class="_9407 _5dba _9hk6 _8esg _9m5o"
                    >
                      <option value="2021" selected="1">
                        2021
                      </option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                      <option value="1919">1919</option>
                      <option value="1918">1918</option>
                      <option value="1917">1917</option>
                      <option value="1916">1916</option>
                      <option value="1915">1915</option>
                      <option value="1914">1914</option>
                      <option value="1913">1913</option>
                      <option value="1912">1912</option>
                      <option value="1911">1911</option>
                      <option value="1910">1910</option>
                      <option value="1909">1909</option>
                      <option value="1908">1908</option>
                      <option value="1907">1907</option>
                      <option value="1906">1906</option>
                      <option value="1905">1905</option>
                    </select>
                  </div>
                </div>
                <div className="signup__block-1elements">
                  <div className="form__div">
                    <div
                      className="signup__boxforgender"
                      onChange={(e) => {
                        setGender(e.target.value)
                      }}
                      style={{
                        justifyContent: 'space-between',
                        display: 'flex',
                        textAlign: 'center',
                      }}
                    >
                      <div>
                        <input
                          type="radio"
                          id="male"
                          name="fav_language"
                          value="მამრობითი"
                        />
                          <label for="male">მამრობითი</label> {' '}
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="female"
                          name="fav_language"
                          value="მდედრობითი"
                        />
                          <label for="female">მდედრობითი</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="flexible"
                          name="fav_language"
                          value="მორგებული"
                        />
                          <label for="flexible">მორგებული</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__buttonContainer signup__button-box">
                  <button
                    className="form__signinButton signup__button1"
                    onClick={() => sendInformation()}
                  >
                    რეგისტრაციის დასრულება
                  </button>
                </div>{' '}
                <div className="form__buttonContainer signup__button-box">
                  <button className="form__RegButton signup__button2 btn__none__hov"></button>
                </div>{' '}
              </>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUpPages
