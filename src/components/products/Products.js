import React from "react";
import { useTranslation } from 'react-i18next'
export default function Products() {
  const {t}=useTranslation()
  return (
    <>
      <section className="products section" id="products">
        <h2 className="section__title section__title-gradient products__line">
          {t("PRODUCTSTITLE")}
        </h2>

        <div className="products__container container grid">
          <article className="products__card">
            <div className="products__content">
              <img
                src="assets/img/product1.png"
                alt=""
                className="products__img"
              />

              <h3 className="products__title">შავი</h3>
              <span className="products__price">$249</span>

              <button className="button button--flex products__button">
                <i className="ri-shopping-bag-line button__icon"></i>
              </button>
            </div>
          </article>
          <article className="products__card">
            <div className="products__content">
              <img
                src="assets/img/product2.png"
                alt=""
                className="products__img"
              />

              <h3 className="products__title">წითელი შავი</h3>
              <span className="products__price">$249</span>

              <button className="button button--flex products__button">
                <i className="ri-shopping-bag-line button__icon"></i>
              </button>
            </div>
          </article>
          <article className="products__card">
            <div className="products__content">
              <img
                src="assets/img/product3.png"
                alt=""
                className="products__img"
              />

              <h3 className="products__title">მუქი ლურჯი</h3>
              <span className="products__price">$249</span>

              <button className="button button--flex products__button">
                <i className="ri-shopping-bag-line button__icon"></i>
              </button>
            </div>
          </article>
          <article className="products__card">
            <div className="products__content">
              <img
                src="assets/img/product4.png"
                alt=""
                className="products__img"
              />

              <h3 className="products__title">ლურჯი</h3>
              <span className="products__price">$249</span>

              <button className="button button--flex products__button">
                <i className="ri-shopping-bag-line button__icon"></i>
              </button>
            </div>
          </article>

          <article className="products__card">
            <div className="products__content">
              <img
                src="assets/img/product5.png"
                alt=""
                className="products__img"
              />

              <h3 className="products__title">ვერცხლი</h3>
              <span className="products__price">$249</span>

              <button className="button button--flex products__button">
                <i className="ri-shopping-bag-line button__icon"></i>
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
