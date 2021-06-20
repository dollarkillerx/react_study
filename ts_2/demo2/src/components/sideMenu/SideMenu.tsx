import React from "react";
import {sideMenuList} from "./mockup";
import {Menu} from "antd";
import {GifOutlined} from '@ant-design/icons'
import {css} from "@emotion/css";

export const SideMenu: React.FC = () => {
    return (
        <Menu mode='vertical' className={css`width: 256px; border: 5px solid !important;`}>
            {sideMenuList.map((m, index) => (
                <Menu.SubMenu
                    key={`side-menu-${index}`}
                    title={<span><GifOutlined/>{m.title}</span>}
                >
                    {m.subMenu.map((v, k) => (
                        <Menu.SubMenu
                            key={`sub-menu-${k}`}
                            title={<span><GifOutlined/>{v.title}</span>}
                        >
                            {v.subMenu.map((sms, smsindex) => (
                                <Menu.Item
                                    key={`sub-sub-menu-${smsindex}`}
                                >
                                <span>
                                    <GifOutlined/>
                                    {sms}
                                </span>
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    ))}
                </Menu.SubMenu>
            ))}
        </Menu>
    )
}