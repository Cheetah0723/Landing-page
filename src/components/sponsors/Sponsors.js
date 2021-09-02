import React from "react";
import { ApplicationContext } from "../../context/application/ApplicationContext";

export default function Sponsors() {
  const { application } = React.useContext(ApplicationContext);

  return (
    <>
      <section className="sponsor section">
        <div className="sponsor__container container grid">
          {/* {application.map((item) => {
            return <img src={item.image} alt="" className="sponsor__img" />;
          })} */}
          <img src="assets/img/sponsor1.png" alt="" className="sponsor__img" />
          <img src="assets/img/sponsor2.png" alt="" className="sponsor__img" />
          <img src="assets/img/sponsor3.png" alt="" className="sponsor__img" />
          <img src="assets/img/sponsor4.png" alt="" className="sponsor__img" />
        </div>
      </section>
    </>
  );
}
