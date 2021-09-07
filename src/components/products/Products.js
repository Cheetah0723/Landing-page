import React from "react";
import { useTranslation } from "react-i18next";
import { ApplicationContext } from "../../context/application/ApplicationContext";

export default function Products() {
  const { t } = useTranslation();
  const { products, setShowSignin, showSignin } =
    React.useContext(ApplicationContext);
  return (
    <>
      {console.log(products)}
      <section className="products section" id="products">
        <h2 className="section__title section__title-gradient products__line">
          {t("PRODUCTSTITLE")}
        </h2>

        <div className="products__container container grid">
          {products.map((item) => {
            return (
              <article className="products__card">
                <div className="products__content">
                  <img src={item.image} alt="" className="products__img" />

                  <h3 className="products__title">{item.title}</h3>
                  <span className="products__price">${item.price}</span>

                  <button
                    className="button button--flex products__button"
                    onClick={() => {
                      const logged = localStorage.getItem("logged");
                      if (!logged) {
                        setShowSignin(!showSignin);
                        document.body.style.overflowY = "hidden";
                      }
                    }}
                  >
                    <i className="ri-shopping-bag-line button__icon"></i>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
