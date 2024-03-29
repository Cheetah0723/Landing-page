import React from "react";
import { HeaderFixtures } from "../../fixtures/header/HeaderFixtures";
import SigninContainer from "../signin/SigninContainer";
import { useTranslation } from "react-i18next";
import { ApplicationContext } from "../../context/application/ApplicationContext";
import { identification } from "../../hooks/IdentificationHooks";

export default function Header() {
  const { t } = useTranslation();
  const { showSignin, setShowSignin } = React.useContext(ApplicationContext);
  const renderClassNames = (item) => {
    if (item.route == window.location.hash) {
      return "nav__link active-link";
    } else {
      return "nav__link";
    }
  };
  React.useEffect(() => {
    if (window.location.hash == "") {
      window.location.hash = "#home";
      window.scrollTo(1, 1);
    }
  });
  return (
    <>
      <SigninContainer
        showSignin={showSignin && "true"}
        handle={() => {
          setShowSignin(!showSignin);
          document.body.style.overflowY = "visible";
        }}
      />
      <header class="header" id="header">
        <nav class="nav container">
          <a href="#" class="nav__logo">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              {HeaderFixtures.map((item) => {
                return (
                  <>
                    <li className="nav__item">
                      <a href={item.route} className={renderClassNames(item)}>
                        {t(`${item.text}`)}
                      </a>
                    </li>
                  </>
                );
              })}
              {identification(
                <button
                  className="nav__btn"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  გასვლა
                </button>,
                <button
                  className="nav__btn"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  ადმინ პანელი
                </button>,
                <button
                  className="nav__btn"
                  onClick={() => {
                    setShowSignin(!showSignin);
                    document.body.style.overflowY = "hidden";
                  }}
                >
                  {t("LOGIN")}
                </button>
              )}
              {/* <button
                className="nav__btn"
                onClick={() => {
                  if (localStorage.getItem("logged") == "true") {
                    localStorage.clear();
                    window.location.reload();
                  } else {
                    setShowSignin(!showSignin);
                    document.body.style.overflowY = "hidden";
                  }
                }}
              >
                {localStorage.getItem("logged") == "true"
                  ? "გასვლა"
                  : t("SIGNIN")}
              </button> */}
            </ul>

            <div class="nav__close" id="nav-close">
              <i class="ri-close-line"></i>
            </div>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class="ri-function-line"></i>
          </div>
        </nav>
      </header>
    </>
  );
}
