import React from "react";

import {Carousel, Footer, Header, ProductCollection, SideMenu, BusinessPartners} from "../../components";
import {Row, Col, Typography} from "antd";
import {css} from "@emotion/css";
import {productList1, productList2, productList3} from './mockups'
import sideImage1 from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import styles from "./HomePage.module.css";


export class HomePage extends React.Component {

    render() {
        return <div>
            <Header/>
            <div className={styles['page-content']}>
                <Row className={css`margin-top: 20px`}>
                    <Col span={6}>
                        <SideMenu/>
                        {/*<div className={css`background: red`}>多重菜单</div>*/}
                    </Col>
                    <Col span={18}>
                        <Carousel/>
                    </Col>
                </Row>

                <ProductCollection
                    title={
                        <Typography.Title level={3} type="warning">
                            爆款推荐
                        </Typography.Title>
                    }
                    sideImage={sideImage1}
                    products={productList1}
                />
                <ProductCollection
                    title={
                        <Typography.Title level={3} type="danger">
                            新品上市
                        </Typography.Title>
                    }
                    sideImage={sideImage2}
                    products={productList2}
                />
                <ProductCollection
                    title={
                        <Typography.Title level={3} type="success">
                            国内游推荐
                        </Typography.Title>
                    }
                    sideImage={sideImage3}
                    products={productList3}
                />
                <BusinessPartners/>
            </div>
            <Footer/>
        </div>
    }
}