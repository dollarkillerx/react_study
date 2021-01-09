import React from "react"
import {css} from "@emotion/css";
import {Layout, Typography} from "antd";

export const Footer: React.FC = () => {
    return <>
        <Layout.Footer>
            <Typography.Title level={3} className={css`text-align: center`}>
                版权所有 @ React 旅游网
            </Typography.Title>
        </Layout.Footer>
    </>
}