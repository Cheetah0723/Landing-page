import React from "react";
import { FooterSection } from "../../fixtures/footer/FooterFixtures";

export default function Footer() {
  return (
    <>
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
              <li>
                <a href="#" class="footer__link">
                  Product help
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Register
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Provides
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__content">
            <form action="" class="footer__form">
              <input type="email" placeholder="Email" class="footer__input" />
              <button class="button button--flex">
                <i class="ri-send-plane-line button__icon"></i> Subscribe
              </button>
            </form>

            <div class="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="ri-instagram-line"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="ri-twitter-line"></i>
              </a>
            </div>
          </div>
        </div>

        <p class="footer__copy">
          <a
            href="https://www.youtube.com/c/Bedimcode/"
            target="_blank"
            class="footer__copy-link"
          >
            &#169; Bedimcode. All right reserved
          </a>
        </p>
      </footer>
    </>
  );
}
