import React from "react"
import {Layout, Typography, Input, Menu, Button, Dropdown} from "antd";
import logo from '../../assets/images/logo.svg'
import {css} from '@emotion/css'
import {GlobalOutlined} from '@ant-design/icons'
import styles from "../../App.module.css";
import {useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom"

export const Header: React.FC = () => {
    const history = useHistory()
    const location = useLocation()
    const params = useParams()
    const routerMath = useRouteMatch()

    return <>
        {/*top-header*/}
        <div className={css`background-color: #f5f5f5; `}>
            <div className={css`
              height: 40px;
              line-height: 40px;
              max-width: 1180px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 0 auto;
            `}>
                <div className={css`margin-left: 55px`}>
                    <Typography.Text>让旅游更幸福</Typography.Text>
                    <Dropdown.Button style={{marginLeft: 15}} overlay={
                        <Menu>
                            <Menu.Item>中文</Menu.Item>
                            <Menu.Item>English</Menu.Item>
                        </Menu>
                    } icon={<GlobalOutlined/>}
                    >语言</Dropdown.Button>
                </div>
                <Button.Group>
                    <Button onClick={() => {history.push("register")}}>Register</Button>
                    <Button onClick={() => {history.push("login")}}>Login</Button>
                </Button.Group>
            </div>
        </div>

        {/*header*/}
        <Layout.Header className={css`
          background-color: white;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1180px;
          margin: 0 auto;
        `}>
            <div className={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}>
                <img src={logo} alt="logo" className={styles['App-logo']}/>
                <Typography.Title className={styles['title']} level={3}>React 旅游网</Typography.Title>
            </div>
            <Input.Search placeholder={"请输入旅游目的地,主题,或关键字"} className={styles['search-input']}/>
        </Layout.Header>

        {/*nav*/}
        <div className={css`background-color: #2577e3;`}>
            <Menu mode={"horizontal"} className={css`
              display: flex;
              justify-content: space-between;
              background-color: #2577e3;
              max-width: 1180px;
              margin: 0 auto;

              li:hover {
                color: white;
              }
            `}>
                <Menu.Item key={1}>旅游首页</Menu.Item>
                <Menu.Item key={2}>周末游</Menu.Item>
                <Menu.Item key={3}>跟团游</Menu.Item>
                <Menu.Item key="4"> 自由行 </Menu.Item>
                <Menu.Item key="5"> 私家团 </Menu.Item>
                <Menu.Item key="6"> 邮轮 </Menu.Item>
                <Menu.Item key="7"> 酒店+景点 </Menu.Item>
                <Menu.Item key="8"> 当地玩乐 </Menu.Item>
                <Menu.Item key="9"> 主题游 </Menu.Item>
                <Menu.Item key="10"> 定制游 </Menu.Item>
                <Menu.Item key="11"> 游学 </Menu.Item>
                <Menu.Item key="12"> 签证 </Menu.Item>
                <Menu.Item key="13"> 企业游 </Menu.Item>
                <Menu.Item key="14"> 高端游 </Menu.Item>
                <Menu.Item key="15"> 爱玩户外 </Menu.Item>
                <Menu.Item key="16"> 保险 </Menu.Item>
            </Menu>
        </div>
    </>
}