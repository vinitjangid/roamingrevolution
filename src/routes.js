import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Photography from "./Components/Photography";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
                <Route exact path="/" component={Home} />
                <Route exact path='/photography' component={Photography}/>
        </Router>
      </div> 
    );
  }
}
export default MyRouts;