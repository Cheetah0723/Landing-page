import React from 'react'

function SignUpPages() {
  return (
    <>
      <div className="signup__centerbox">
        <div className="signup__mainbox">
          <div className="signin__head-header signup__head">
            <div className="signin__head-header-wrapper">
              საიტზე რეგისტრაცია
            </div>
          </div>
          <form action="">
            <div className="signup__block-2elements">
              <div class="form__div">
                <input
                  type="text"
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                  class="form__input"
                  placeholder=" "
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
                />
                <label for="" class="form__label">
                  გაიმეორეთ პაროლი
                </label>
              </div>
            </div>
            <div className="form__buttonContainer signup__button-box">
              <button className="form__signinButton signup__button">
                რეგისტრაცია
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUpPages
