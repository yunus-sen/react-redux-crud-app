import React, {Component} from 'react';
//import { Router, Route, Switch} from "react-router";
import {Link,Route} from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
class App extends Component {
    render() {
        return (

            <div className={"App"}>
              <header className={"App-header"}>
                  <Link to={"movie"}>Movie Page</Link>
              </header>
              <Route path={"/movie"} strict exact component={MoviesPage}></Route>
            </div>

        );
    }
}


const mapStateToProp = (state)=>(
    state
)
export default connect(mapStateToProp)(App);
