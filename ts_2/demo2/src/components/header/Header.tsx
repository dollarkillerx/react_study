import React from "react";
import styles from "./Header.module.css"
import {css} from "@emotion/css";
import {Button, Dropdown, Input, Layout, Menu, Typography} from "antd";
import {GlobalOutlined} from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import {useHistory} from "react-router-dom"
import store from "../../redux/store"
import {useState,useEffect} from "react";
import {LanguageState} from "../../redux/languageReducer";
import {useTranslation} from "react-i18next"

interface langState extends LanguageState {
}

export const Header: React.FC = () => {
    const i18 = useTranslation()

    const [langState, setLangState] = useState<langState>();

    const history = useHistory()
    let st = store.getState()

    useEffect(()=>{
        setLangState(()=>{
            console.log(st)
            return {languageList: st.languageList, language: st.language}
        })
    },[])

    store.subscribe(() => {
        const st = store.getState()
        setLangState({languageList: st.languageList, language: st.language})
    })

    const menuClickHandler = (e) => {
        const action = {
            type: "change_language",
            payload: e.key
        }

        store.dispatch(action)
    }

    return <div>
        <div className={styles['app-header']}>
            {/*top-header*/}
            <div className={styles['top-header']}>
                <div className={css`width: 88%;
                  margin: 0 auto`}>
                    <Typography.Text>{i18.t("header.slogan")}</Typography.Text>
                    <Dropdown.Button className={css`margin-left: 15px`}
                                     overlay={
                                         <Menu>
                                             {langState?.languageList.map(k => (
                                                 <Menu.Item key={k.code} onClick={menuClickHandler}>{k.name}</Menu.Item>
                                             ))}
                                         </Menu>
                                     }
                                     icon={<GlobalOutlined/>}
                    >
                        {langState?.language === "en" ? "English" : "中文"}
                    </Dropdown.Button>
                    <Button.Group className={styles["buttons-group"]}>
                        <Button onClick={() => history.push("/signIn")}>注册</Button>
                        <Button onClick={() => history.push("/register")}>登录</Button>
                    </Button.Group>
                </div>
            </div>


            <Layout.Header className={styles['main-header']}>
                <img src={logo} alt="" className={styles['App-logo']}/>
                <Typography.Title className={styles['title']} level={3}>React 旅游网</Typography.Title>
                <Input.Search className={styles['search-input']} placeholder={"请输入旅游目的地,主题,或关键字"}/>
            </Layout.Header>

            <Menu mode={"horizontal"} className={styles['main-menu']}>
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
    </div>
}
