import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPages from "./pages/index/IndexPages";
import axios from "axios";
import { ApplicationContext } from "./context/application/ApplicationContext";
import env from "./application/environment/env.json";
import SignUpPages from "./pages/signup/SignUpPages";
import ForgotPasswordPages from "./pages/forgotpassword/ForgotPasswordPages";

function App() {
  const [application, setApplication] = React.useState([]);
  const [notification, setNotification] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios.post(`${env.host}/api/sponsors`).then((res) => {
      setApplication(res.data.data);
    }, []);
    axios.get(`${env.host}/api/products`).then((res) => {
      setProducts(res.data.data);
    }, []);
    axios.get(`${env.host}/api/notifications/read`).then((res) => {
      setNotification(res.data.data);
    });
  }, []);
  useEffect(() => {
    if (localStorage.getItem("lang") == "en") {
      document.body.classList.add("en");
    }
  });
  return (
    <>
      <ApplicationContext.Provider
        value={{
          application,
          setApplication,
          notification,
          setNotification,
          products,
          setProducts,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={IndexPages} />
            <Route path="/signup" exact component={SignUpPages} />
            <Route
              path="/forgot-password"
              exact
              component={ForgotPasswordPages}
            />
          </Switch>
        </BrowserRouter>
      </ApplicationContext.Provider>
    </>
  );
}

export default App;
