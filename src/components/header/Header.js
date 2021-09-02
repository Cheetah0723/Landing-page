import React from "react";
import { HeaderFixtures } from "../../fixtures/header/HeaderFixtures";

export default function Header() {
  return (
    <>
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
                    <li class="nav__item">
                      <a href={item.route} class="nav__link active-link">
                        {item.text}
                      </a>
                    </li>
                  </>
                );
              })}
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
