import React from "react";
import { ApplicationContext } from "../../context/application/ApplicationContext";

export default function Sponsors() {
  const { application } = React.useContext(ApplicationContext);

  return (
    <>
      <section className="sponsor section">
        <div className="sponsor__container container grid">
          {application.map((item, i) => {
            return (
              <img key={i} src={item.image} alt="" className="sponsor__img" />
            );
          })}
        </div>
      </section>
    </>
  );
}
