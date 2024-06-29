import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import News from "./components/News";
import "../node_modules/popper.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const apiKey = "be7fd066469d47b4b3451d0350ed3e74";
  return (

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              apiKey={apiKey}
              pageSize={6}
              key="general"
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              apiKey={apiKey}
              pageSize={6}
              key="business"
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              apiKey={apiKey}
              pageSize={6}
              key="entertainment"
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              apiKey={apiKey}
              pageSize={6}
              key="health"
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              apiKey={apiKey}
              pageSize={6}
              key="science"
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/technology">
            <News
              apiKey={apiKey}
              pageSize={6}
              key="technology"
              country="in"
              category="technology"
            />
          </Route>
          <Route exact path="/sports">
            <News
              apiKey={apiKey}
              pageSize={6}
              key="sports"
              country="in"
              category="sports"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
