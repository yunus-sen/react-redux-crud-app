import React, {Component} from 'react';
import {Route} from "react-router-dom";
import MoviesPage from"../src/components/pages/MoviesPage"
import {connect} from "react-redux";
import 'semantic-ui-css/semantic.min.css'
import Footer from "./components/Footer";
import {Container} from 'semantic-ui-react'
import Header from "./components/Header";

class App extends Component {


    render() {

        return (
            <div >

                <Header/>

                <Container text>
                    <Route path={"/movies"} strict exact component={MoviesPage}/>
                </Container>

                <Footer/>

            </div>
        );
    }
}

const mapStateToProps = (state)=>(
    state
)
export default connect(mapStateToProps)(App);
