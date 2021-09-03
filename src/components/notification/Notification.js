import React from "react";

export default function Notification() {
  return (
    <>
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

          <img src="assets/img/discount.png" alt="" className="discount__img" />
        </div>
      </section>
    </>
  );
}
