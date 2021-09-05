import React from "react";
import { ApplicationContext } from "../../context/application/ApplicationContext";

export default function Notification() {
  const { notification } = React.useContext(ApplicationContext);
  return (
    <>
      <section className="discount section">
        {notification.slice(0, 1).map((item) => {
          const { title, image, description } = item;
          return (
            <>
              <div className="discount__container container grid">
                <div className="discount__animate">
                  <h2 className="discount__title">
                    <pre style={{ fontFamily: "MarkGEO" }}>{title}</pre>
                  </h2>
                  <p className="discount__description">{description}</p>
                  <a href="#" className="button button--flex">
                    <i className="ri-shopping-bag-line button__icon"></i> ყიდვა
                  </a>
                </div>

                <img src={image} alt="" className="discount__img" />
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}
