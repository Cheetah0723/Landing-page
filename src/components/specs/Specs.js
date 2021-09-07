import React from "react";
import { useTranslation } from 'react-i18next'
export default function Specs() {
  const {t}=useTranslation()
  return (
    <>
      <section className="specs section grid" id="specs">
        <h2 className="section__title section__title-gradient">
          {t("SPECSTITLE")}
        </h2>

        <div className="specs__container container grid">
          <div className="specs__content grid">
            <div className="specs__data">
              <i className="ri-bluetooth-line specs__icon"></i>
              <h3 className="specs__title">{t("SPECSTITLE1")}</h3>
              <span className="specs__subtitle">Bluetooth v5.2</span>
            </div>

            <div className="specs__data">
              <i className="ri-battery-charge-line specs__icon"></i>
              <h3 className="specs__title">{t("SPECSTITLE2")}</h3>
              <span className="specs__subtitle">{t("SPECSCHILDTITLE2")}</span>
            </div>

            <div className="specs__data">
              <i className="ri-plug-line specs__icon"></i>
              <h3 className="specs__title">{t("SPECSTITLE3")}</h3>
              <span className="specs__subtitle">{t("SPECSCHILDTITLE3")}</span>
            </div>

            <div className="specs__data">
              <i className="ri-mic-line specs__icon"></i>
              <h3 className="specs__title">{t("SPECSTITLE4")}</h3>
              <span className="specs__subtitle">
              {t("SPECSCHILDTITLE4")}
              </span>
            </div>
          </div>

          <div>
            <img src="assets/img/specs.png" alt="" className="specs__img" />
          </div>
        </div>
      </section>
    </>
  );
}
