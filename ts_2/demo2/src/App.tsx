import React from 'react';
import styles from './App.module.css'
import {Footer, Header} from "./components";
import {Row, Col} from "antd";
import {css} from "@emotion/css";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles['page-content']}>
                <Row className={css`margin-top: 20px`}>
                    <Col span={}>

                    </Col>
                </Row>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
