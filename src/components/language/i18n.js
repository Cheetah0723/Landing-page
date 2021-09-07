import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      HOME: "Home",
      SPECS: "Specs",
      CASE: "Case",
      PRODUCTS: "Products",
      SIGNIN: "Sign in",
      OVERVIEW: "Overview"
    },
  },
  ge: {
    translation: {
      HOME: "მთავარი",
      SPECS: "მახასიათებლები",
      CASE: "ქეისი",
      PRODUCTS: "პროდუქტები",
      SIGNIN: "შესვლა",
      OVERVIEW: "მიმოხილვა"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: `${localStorage.getItem("lang") || "ge"}`,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
