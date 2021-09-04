import React, { useRef, useState } from "react";

function SignUpPages() {
  const [showSignUpNextPage, setShowSignUpNextPage] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const firstNameRef = useRef();
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const length = 2;
  const identificationFirstPage = () => {
    if (!firstName) {
      setFirstNameError(true);
      firstNameRef.current.focus();
    }
  };
  return (
    <>
      <div className="signup__centerbox">
        <div className="signup__mainbox">
          <form onSubmit={(e) => e.preventDefault()}>
            {showSignUpNextPage == 1 && (
              <>
                <div className="signin__head-header signup__head">
                  <div className="signin__head-header-wrapper">
                    პირადი ინფორმაცია ({showSignUpNextPage}/{length})
                  </div>
                </div>
                <div className="signup__block-2elements">
                  <div class="form__div">
                    <input
                      type="text"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      ref={firstNameRef}
                      class="form__input"
                      placeholder=" "
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label for="" class="form__label">
                      სახელი
                    </label>
                  </div>
                  <div class="form__div">
                    <input
                      type="text"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      class="form__input"
                      placeholder=" "
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <label for="" class="form__label">
                      გვარი
                    </label>
                  </div>
                </div>
                <div className="signup__block-1elements">
                  <div class="form__div">
                    <input
                      type="text"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      class="form__input"
                      placeholder=" "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="" class="form__label">
                      ელ-ფოსტა
                    </label>
                  </div>
                </div>
                <div className="signup__block-2elements">
                  <div class="form__div">
                    <input
                      type="password"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      class="form__input"
                      placeholder=" "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="" class="form__label">
                      პაროლი
                    </label>
                  </div>
                  <div class="form__div">
                    <input
                      type="password"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      class="form__input"
                      placeholder=" "
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <label for="" class="form__label">
                      გაიმეორეთ პაროლი
                    </label>
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
                    პირადი ინფორმაცია ({showSignUpNextPage}/{length})
                  </div>
                </div>
                <div className="signup__block-3elements">
                  <div class="form__div">
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
                  <div class="form__div">
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
                  <div class="form__div">
                    <select name="year" size="1">
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                    </select>
                  </div>
                </div>
                <div className="signup__block-2elements">
                  <div class="form__div ">
                    <input
                      type="file"
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      class="form__input"
                      placeholder=" "
                    />
                    <label for="" class="form__label">
                      ავატარი
                    </label>
                  </div>
                  <div class="form__div">
                    <div className="signup__boxforgender">
                      <div>
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                          <label for="html">მამრობითი</label> {" "}
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="css"
                          name="fav_language"
                          value="CSS"
                        />
                          <label for="css">მდედრობითი</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__buttonContainer signup__button-box">
                  <button className="form__signinButton signup__button1">
                    რეგისტრაციის დასრულება
                  </button>
                </div>{" "}
                <div className="form__buttonContainer signup__button-box">
                  <button
                    className="form__RegButton signup__button2"
                    onClick={() => setShowSignUpNextPage(1)}
                  >
                    უკან დაბრუნება
                  </button>
                </div>{" "}
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPages;
