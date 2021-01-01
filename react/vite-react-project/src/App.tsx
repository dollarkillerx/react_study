import React, { useState } from 'react'
import logo from './logo.svg'
import RobotData from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className={styles.app}>
     <div className={styles.robotList}>
      {
          RobotData.map( (r) => (
            <Robot id={r.id} email={r.email} name={r.name}/>
          ))
        }
   </div>
   </div>
  );  
}

export default App