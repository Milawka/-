import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Login} from "./loginPage";
import {Statistics} from "./statistics";

import {Post} from "./post";
import {MainComponent} from "./mainPage";
import {SnapContainer} from "./snapshotsContainer";
import {Grommet} from "grommet";
import {Route, Switch} from "react-router";


const theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};
const MyFirstComponent = () =>
    (
        <Router>

            <Grommet theme={theme}>

                <Switch>
                    <Route path="(/|/login)" component={Login}/>
                    <Route path="/main" component={MainComponent}/>
                    <Route path="/category/:id" component={SnapContainer}/>
                    <Route path="/post/:id" component={Post}/>
                    <Route path="/statistics" component={Statistics}/>

                </Switch>

            </Grommet>

        </Router>


    )
;


ReactDOM.render(
    <MyFirstComponent/>,
    document.getElementById('app')
);

// app.use('/public', express.static('../src'));


