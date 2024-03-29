import React, { useRef } from "react";
import {
  FooterSection,
  FooterSocialNetwork,
} from "../../fixtures/footer/FooterFixtures";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import env from "../../application/environment/env.json";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [input, setInput] = React.useState("");
  const [inputError, setInputError] = React.useState(false);
  const [inputErrorMessage, setInputErrorMessage] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [date, setDate] = React.useState("");
  const inputRef = useRef();
  const changeLanguageHandler = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };
  React.useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = dd + "-" + mm + "-" + yyyy;
    setDate(today);
  }, []);
  const identification = () => {
    if (!input) {
      setInputError(true);
      setInputErrorMessage("გთხოვთ შეიყვანოთ ელ.ფოსტა");
      inputRef.current.focus();
    } else if (
      !/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g.test(
        input
      )
    ) {
      setInputError(true);
      setInputErrorMessage("არასწორი ელ.ფოსტა");
      inputRef.current.focus();
    } else {
      setInputErrorMessage("");
      setInputError(false);
      setSpinner(true);
      document.body.style.overflowY = "hidden";
      axios
        .post(`${env.host}/api/subscriber`, {
          email: input,
          date: date,
        })
        .then((res) => {
          if (res.data.success) {
            Swal.fire("გილოცავ", "მოქმედება წარმატებით შესრულდა", "success");
          }
          setInput("");
          document.body.style.overflowY = "scroll";
          setSpinner(false);
        });
    }
  };
  return (
    <>
      {inputError && (
        <Alert
          severity="error"
          style={{
            fontFamily: "MarkGEO",
            fontSize: "12px",
            width: "295px",
            position: "fixed",
            top: "15px",
            right: "10px",
            zIndex: "999",
          }}
        >
          {inputErrorMessage}
        </Alert>
      )}
      {spinner && (
        <>
          <div id="loading__bg"></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              position: "fixed",
              margin: "0 auto",
            }}
          >
            <div id="loading"></div>
          </div>
        </>
      )}
      <footer class="footer section">
        <div class="footer__container container grid">
          <a href="#" class="footer__logo">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <div class="footer__content">
            <h3 class="footer__title">{t("PRODUCTS")}</h3>

            <ul class="footer__links">
              {FooterSection[0].products.map((item) => {
                const { name, route } = item;
                return (
                  <>
                    <li>
                      <a href={route} class="footer__link">
                        {t(name)}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">{t("SUPPORT")}</h3>

            <ul class="footer__links">
              {FooterSection[1].support.map((item) => {
                const { name, route } = item;
                return (
                  <>
                    <li>
                      <a href={route} class="footer__link">
                        {t(name)}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          <div class="footer__content">
            <form
              onSubmit={(e) => e.preventDefault()}
              className={
                inputError
                  ? "footer__form error__input__border"
                  : "footer__form"
              }
            >
              <input
                type="text"
                placeholder={`${t("EMAILINPUT")}`}
                class="footer__input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                class="button button--flex"
                onClick={() => identification()}
              >
                <i class="ri-send-plane-line button__icon"></i> {t("SUBSCRIBE")}
              </button>
            </form>

            <div class="footer__social">
              {FooterSocialNetwork.map((item) => {
                const { icon, route } = item;
                return (
                  <>
                    <a href={route} target="_blank" class="footer__social-link">
                      <i class={icon}></i>
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <p class="footer__copy">
          <a
            href="#"
            onClick={() => {
              if (localStorage.getItem("lang") == "ge") {
                changeLanguageHandler("en");
              } else {
                changeLanguageHandler("ge");
              }
            }}
            class="footer__copy-link"
          >
            &#169; Beats. All right reserved | English
          </a>
        </p>
      </footer>
    </>
  );
}
