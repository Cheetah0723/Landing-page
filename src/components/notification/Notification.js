import React from "react";
import { ApplicationContext } from "../../context/application/ApplicationContext";
import { useTranslation } from "react-i18next";

export default function Notification() {
  const { t } = useTranslation();
  const { notification } = React.useContext(ApplicationContext);
  return (
    <>
      <section className="discount section">
        {notification.slice(0, 1).map((item) => {
          const { title, image, description } = item;
          const newTitle = title.replace("\\n", "\n");
          return (
            <>
              <div className="discount__container container grid">
                <div className="discount__animate">
                  <h2 className="discount__title">
                    <pre style={{ fontFamily: "MarkGEO" }}>{newTitle}</pre>
                  </h2>
                  <p className="discount__description">{description}</p>
                  <a href="#" className="button button--flex">
                    <i className="ri-shopping-bag-line button__icon"></i>{" "}
                    {t("BUY")}
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
