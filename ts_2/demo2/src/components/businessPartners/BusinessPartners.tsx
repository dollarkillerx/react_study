import React from "react";
import {Divider, Typography, Row, Col} from "antd";
import img1 from '../../assets/images/microsoft-80658_640.png'
import img2 from '../../assets/images/icon-720944_640.png'
import img3 from '../../assets/images/follow-826033_640.png'
import img4 from '../../assets/images/facebook-807588_640.png'
import {css} from "@emotion/css";

const companies = [
    {src: img1, title: "Microsoft"},
    {src: img2, title: "Youtube"},
    {src: img3, title: "Ins"},
    {src: img4, title: "Facebook"},
]

export const BusinessPartners: React.FC = () => {
    return <div className={css`margin: 0 auto`}>
        <Divider orientation="left">
            <Typography.Title level={3}>合作企业</Typography.Title>
        </Divider>
        <Row>
            {
                companies.map((c, index) => (
                    <Col span={6} key={"bus-par" + index}>
                        <img src={c.src} alt="" className={css`
                          width: 80%;
                          display: block;
                          margin: 0 auto;
                        `}/>
                        {/*<Typography.Title className={css`text-align: center`}>{c.title}</Typography.Title>*/}
                    </Col>
                ))
            }
        </Row>
    </div>
}