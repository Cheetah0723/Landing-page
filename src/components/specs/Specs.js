import React from "react";

export default function Specs() {
  return (
    <>
      <section className="specs section grid" id="specs">
        <h2 className="section__title section__title-gradient">
          მახასიათებლები
        </h2>

        <div className="specs__container container grid">
          <div className="specs__content grid">
            <div className="specs__data">
              <i className="ri-bluetooth-line specs__icon"></i>
              <h3 className="specs__title">კავშირი</h3>
              <span className="specs__subtitle">Bluetooth v5.2</span>
            </div>

            <div className="specs__data">
              <i className="ri-battery-charge-line specs__icon"></i>
              <h3 className="specs__title">ელემენტი</h3>
              <span className="specs__subtitle">იმუშავებს 40სთ</span>
            </div>

            <div className="specs__data">
              <i className="ri-plug-line specs__icon"></i>
              <h3 className="specs__title">დატენვა</h3>
              <span className="specs__subtitle">სწრაფი დატენვა 4.2-AAC</span>
            </div>

            <div className="specs__data">
              <i className="ri-mic-line specs__icon"></i>
              <h3 className="specs__title">მიკროფონი</h3>
              <span className="specs__subtitle">
                აქვს მხარდაჭერა Apple Siri-ის <br /> და Google-ის
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
