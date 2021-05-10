import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./Global.css";
import Navbar from "./components/Navbar";
import Top from "./pages/Top";
import New from "./pages/New";
import Best from "./pages/Best";
import Comments from "./pages/Comments";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/new" component={New} />
          <Route exact path="/best" component={Best} />
          <Route exact path="/comments" component={Comments} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
