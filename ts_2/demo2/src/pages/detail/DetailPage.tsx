import React from "react";
import {RouteComponentProps} from "react-router-dom"

interface MathParams {
    touristRouterID: string
}

export const DetailPage: React.FC<RouteComponentProps<MathParams>> = (props) => {
    console.log(props.history)
    console.log(props.location)
    console.log(props.match)

    return <div>旅游页面详细逻辑 id: {props.match.params.touristRouterID}</div>
}