import React from 'react';
import RobotData from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import {css} from '@emotion/css'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"/>
        <h1 className={css`font-family: 'Slidefu';font-size: 72px`}>罗伯特机器人炫酷吊炸天   巴适的板</h1>
      </div>

      <div className={styles.robotList}>
        {
          RobotData.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
