import React from 'react'
import {css} from '@emotion/css'
import {Header, Footer, SideMenu, Carousel, ProductCollection, BusinessPartners} from "../../components"
import {Row, Col, Typography} from 'antd'
import {productList1, productList2, productList3} from './mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import {withTranslation, WithTranslation} from 'react-i18next'


class HomePageComponent extends React.Component<WithTranslation, any> {
    render() {
        const {t} = this.props
        return (
            <div>
                <div className={css`
                  background-color: white;
                  height: 60px;
                  line-height: 60px;
                `}>
                    <Header/>
                    {/*页面内容*/}
                    <div className={css`
                      max-width: 1180px;
                      margin-left: auto;
                      margin-right: auto;
                      min-height: 75vh;
                    `}>
                        <Row style={{marginTop: 20}}>
                            <Col span={6}>
                                <div>
                                    <SideMenu/>
                                </div>
                            </Col>
                            <Col span={18}>
                                <div className={css`background-color: #00DBAB`}>
                                    <Carousel/>
                                </div>
                            </Col>

                            <ProductCollection title={
                                <Typography.Title level={3} type={"warning"}>{t("home_page.hot_recommended")}</Typography.Title>
                            } sideImage={sideImage} products={productList1}/>

                            <ProductCollection title={
                                <Typography.Title level={3} type={"danger"}>{t("home_page.new_arrival")}</Typography.Title>
                            } sideImage={sideImage2} products={productList2}/>

                            <ProductCollection title={
                                <Typography.Title level={3} type={"success"}>{t("home_page.domestic_travel")}</Typography.Title>
                            } sideImage={sideImage3} products={productList3}/>
                        </Row>

                        <BusinessPartners/>
                    </div>

                    <Footer/>
                </div>
            </div>
        )
    }
}

export const HomePage = withTranslation()(HomePageComponent)
