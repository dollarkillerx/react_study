import React from 'react';
import styles from './App.module.css'
import {HomePage, Register, SignInPage,DetailPage} from "./pages";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/signIn" component={SignInPage}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/detail/:touristRouterID" component={DetailPage}/>
                    <Route render={()=> <h1>404 Not Found</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
