import React from "react";
import {
  FooterSection,
  FooterSocialNetwork,
} from "../../fixtures/footer/FooterFixtures";
import Alert from "@material-ui/lab/Alert";
// import { makeStyles } from "@material-ui/core/styles";

export default function Footer() {
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: '100%',
  //     '& > * + *': {
  //       marginTop: theme.spacing(2),
  //     },
  //   },
  // }));
  const [input, setInput] = React.useState("");
  const [inputError, setInputError] = React.useState(false);
  const identification = () => {
    if (!input) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };
  // const classes = useStyles();
  return (
    <>
      <Alert severity="error" is-active={inputError && "true"}>
        Please enter a Email
      </Alert>
      <footer class="footer section">
        <div class="footer__container container grid">
          <a href="#" class="footer__logo">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <div class="footer__content">
            <h3 class="footer__title">Products</h3>

            <ul class="footer__links">
              {FooterSection[0].products.map((item) => {
                const { name, route } = item;
                return (
                  <>
                    <li>
                      <a href={route} class="footer__link">
                        {name}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Support</h3>

            <ul class="footer__links">
              {FooterSection[1].support.map((item) => {
                const { name, route } = item;
                return (
                  <>
                    <li>
                      <a href={route} class="footer__link">
                        {name}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          <div class="footer__content">
            <form onSubmit={(e) => e.preventDefault()} class="footer__form">
              <input type="email" placeholder="Email" class="footer__input" />
              <button
                class="button button--flex"
                onClick={() => identification()}
              >
                <i class="ri-send-plane-line button__icon"></i> Subscribe
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
          <a href="#" target="_blank" class="footer__copy-link">
            &#169; Beats. All right reserved
          </a>
        </p>
      </footer>
    </>
  );
}
