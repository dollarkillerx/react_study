import React from "react"
import {css} from "@emotion/css";
import {Layout, Typography} from "antd";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
    const {t} = useTranslation();
    return <>
        <Layout.Footer>
            <Typography.Title level={3} className={css`text-align: center`}>
                {t("footer.detail")}
            </Typography.Title>
        </Layout.Footer>
    </>
}