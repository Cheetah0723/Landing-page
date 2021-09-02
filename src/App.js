import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPages from "./pages/index/IndexPages";
import axios from "axios";
import { ApplicationContext } from "./context/application/ApplicationContext";
import env from "./application/environment/env.json";

function App() {
  const [application, setApplication] = React.useState([]);
  React.useEffect(() => {
    axios.post(`${env.host}/api/sponsors`).then((res) => {
      setApplication(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return (
    <>
      <ApplicationContext.Provider value={{ application, setApplication }}>
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
