import React from "react";

export default function Case() {
  return (
    <>
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
              <i className="ri-information-line button__icon"></i> ვრცლად
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
