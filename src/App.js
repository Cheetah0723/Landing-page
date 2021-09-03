import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPages from "./pages/index/IndexPages";
import axios from "axios";
import { ApplicationContext } from "./context/application/ApplicationContext";
import env from "./application/environment/env.json";

function App() {
  const [application, setApplication] = React.useState([]);
  const [notification, setNotification] = React.useState([]);
  React.useEffect(() => {
    axios.post(`${env.host}/api/sponsors`).then((res) => {
      setApplication(res.data.data);
    });
    axios.get(`${env.host}/api/notifications/read`).then((res) => {
      setNotification(res.data.data);
    });
  }, []);
  return (
    <>
      <ApplicationContext.Provider
        value={{ application, setApplication, notification, setNotification }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={IndexPages} />
          </Switch>
        </BrowserRouter>
      </ApplicationContext.Provider>
    </>
  );
}

export default App;
