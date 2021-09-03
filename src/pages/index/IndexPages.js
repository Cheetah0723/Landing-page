import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sponsors from '../../components/sponsors/Sponsors'
import Home from '../../components/home/Home'
import Specs from '../../components/specs/Specs'

export default function IndexPages() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />

        <Sponsors />
        <Specs />

        <section className="case section grid" id="case">
          <h2 className="section__title section__title-gradient">ქეისი</h2>

          <div className="case__container container grid">
            <div>
              <img src="assets/img/case.png" alt="" className="case__img" />
            </div>

            <div className="case__data">
              <p className="case__description">
                მარტივად მოსახმარი და კონფორტული ქეისი, რომლითაც მის შენახვას
                ყველგან მოახერხებ.
              </p>
              <a href="#" className="button button--flex">
                <i className="ri-information-line button__icon"></i> მეტი
              </a>
            </div>
          </div>
        </section>

        <section className="discount section">
          <div className="discount__container container grid">
            <div className="discount__animate">
              <h2 className="discount__title">
                ჩაეშვი <br /> მუსიკის სამყაროში
              </h2>
              <p className="discount__description">
                იყიდე ახლა 50%-იანი ფასდაკლებით.
              </p>
              <a href="#" className="button button--flex">
                <i className="ri-shopping-bag-line button__icon"></i> ყიდვა
              </a>
            </div>

            <img
              src="assets/img/discount.png"
              alt=""
              className="discount__img"
            />
          </div>
        </section>

        <section className="products section" id="products">
          <h2 className="section__title section__title-gradient products__line">
            აირჩიე სტილი
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

                <h3 className="products__title">ბინდის ვერცხლისფერი</h3>
                <span className="products__price">$249</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"></i>
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-s-line scrollup__icon"></i>
      </a>
    </>
  )
}
