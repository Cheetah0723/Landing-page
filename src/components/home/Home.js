import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
const {t}=useTranslation()

  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div>
            <img src="assets/img/home.png" alt="" className="home__img" />
          </div>

          <div className="home__data">
            <div className="home__header">
              <h1 className="home__title">On ear</h1>
              <h2 className="home__subtitle">Beats 3</h2>
            </div>

            <div className="home__footer">
              <h3 className="home__title-description">{t("OVERVIEW")}</h3>
              <p className="home__description">{t("OVERVIEWTEXT")}
              </p>
              <a href="#" className="button button--flex">
                <span className="button--flex">
                  <i className="ri-shopping-bag-line button__icon">{t("ADDTOBAG")}</i>
                </span>
                <span className="home__price">$299</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
