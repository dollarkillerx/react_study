import React from 'react';
import {Home} from './pages'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/login"} render={() => (<div>登录</div>)}/>
                    <Route render={() => ("页面去火星了 404 Not Found")}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
