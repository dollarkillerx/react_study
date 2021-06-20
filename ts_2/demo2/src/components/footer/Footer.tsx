import React from "react";
import {Layout, Typography} from "antd";
import {css} from "@emotion/css";

export const Footer: React.FC = () => {
    return <div>
        <Layout.Footer>
            <Typography.Title level={3} className={css`text-align: center`}>版权所有 React 旅游网</Typography.Title>
        </Layout.Footer>
    </div>
}