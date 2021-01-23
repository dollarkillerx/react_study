import React from 'react';
import {HomePage, SignInPage, RegisterPage, DetailPage} from './pages'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route path={"/login"} component={SignInPage}/>
                    <Route path={"/register"} component={RegisterPage}/>
                    <Route path={"/detail/:touristRouteId"} component={DetailPage}/>
                    <Route render={() => ("页面去火星了 404 Not Found")}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
