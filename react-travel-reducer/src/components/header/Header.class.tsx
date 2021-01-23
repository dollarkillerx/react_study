import React from "react"
import {Layout, Typography, Input, Menu, Button, Dropdown} from "antd";
import logo from '../../assets/images/logo.svg'
import {css} from '@emotion/css'
import {GlobalOutlined} from '@ant-design/icons'
import styles from "../../App.module.css";
import {withRouter, RouteComponentProps} from "react-router-dom"
import store from "../../redux/store"
import {LanguageState} from "../../redux/languageReducer"
import {withTranslation, WithTranslation} from "react-i18next"

interface State extends LanguageState {
}

class HeaderComponent extends React.Component<RouteComponentProps & WithTranslation, State> {
    constructor(props) {
        super(props)
        const storeState = store.getState()

        this.state = {
            language: storeState.language,
            languageList: storeState.languageList
        }

        store.subscribe(() => {
            const storeState = store.getState()
            this.setState({language: storeState.language, languageList: storeState.languageList})
        })
    }

    menuClickHandler = (e) => {
        // this.setState({language: e.key})
        if (e.key == "add") {
            const action = {
                type: "add_language", payload: {
                    code: "new_lang",
                    name: "new_lang",
                }
            }
            console.log(action)
            store.dispatch(action)
            return
        }

        const action = {type: "change_language", payload: e.key}
        store.dispatch(action)
    };

    render() {
        const {history,t} = this.props;

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
                        <Typography.Text>{t("header.slogan")}</Typography.Text>
                        <Dropdown.Button style={{marginLeft: 15}} overlay={
                            <Menu onClick={this.menuClickHandler}>
                                {
                                    this.state.languageList.map(l => {
                                        return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                                    })
                                }
                                <Menu.Item key={"add"}>{t("header.add_new_language")}</Menu.Item>
                            </Menu>
                        } icon={<GlobalOutlined/>}
                        >{this.state.language === "zh" ? "中文" : "English"}</Dropdown.Button>
                    </div>
                    <Button.Group>
                        <Button onClick={() => {
                            history.push("register")
                        }}>{t("header.register")}</Button>
                        <Button onClick={() => {
                            history.push("login")
                        }}>{t("header.singnin")}</Button>
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
                    <Typography.Title className={styles['title']} level={3}>{t("header.title")}</Typography.Title>
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
                    <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
                    <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
                    <Menu.Item key="3"> {t("header.group")} </Menu.Item>
                    <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
                    <Menu.Item key="5"> {t("header.private")} </Menu.Item>
                    <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
                    <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
                    <Menu.Item key="8"> {t("header.local")} </Menu.Item>
                    <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
                    <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
                    <Menu.Item key="11"> {t("header.study")} </Menu.Item>
                    <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
                    <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
                    <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
                    <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
                    <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
                </Menu>
            </div>
        </>
    }
}

export const Header = withTranslation()(withRouter(HeaderComponent))