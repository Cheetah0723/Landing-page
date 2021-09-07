import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Case() {
  const {t}=useTranslation()
  return (
    <>
      <section className="case section grid" id="case">
        <h2 className="section__title section__title-gradient">{t("CASETITLE")}</h2>

        <div className="case__container container grid">
          <div>
            <img src="assets/img/case.png" alt="" className="case__img" />
          </div>

          <div className="case__data">
            <p className="case__description">
              {t("CASETEXT")}
            </p>
            <a href="#" className="button button--flex">
              <i className="ri-information-line button__icon"></i> {t("CASEMOREINFO")}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
