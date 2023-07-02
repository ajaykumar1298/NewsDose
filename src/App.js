//convert class based component to function based component start here
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const api = process.env.REACT_APP_NEWS_API;
  const pageSize = 9;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" length={3} progress={progress} />
        {/* <Spiner /> */}
        <Switch>
          <Route exact path="/">
            <News
              apiKey={api}
              setProgress={setProgress}
              pageSize={pageSize}
              key="general"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              apiKey={api}
              setProgress={setProgress}
              pageSize={pageSize}
              key="business"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              apiKey={api}
              setProgress={setProgress}
              pageSize={pageSize}
              key="entertainment"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              apiKey={api}
              setProgress={setProgress}
              pageSize={pageSize}
              key="health"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              apiKey={api}
              setProgress={setProgress}
              pageSize={pageSize}
              key="science"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              apiKey={api}
              setProgress={setProgress}
              pageSize={pageSize}
              key="sports"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              apiKey={api}
              setProgress={setProgress}
              pageSize={pageSize}
              key="technology"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
