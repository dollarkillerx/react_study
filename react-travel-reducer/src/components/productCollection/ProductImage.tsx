import React from 'react'
import {Image, Typography} from 'antd'
import {withRouter, RouteComponentProps} from 'react-router-dom'

interface PropsType extends RouteComponentProps {
    id: string | number
    size: "large" | "small"
    imageSrc: string
    price: number | string
    title: string
}

const ProductImageComponent: React.FC<PropsType> = ({id, size, imageSrc, price, title, history,location,match}) => {
    // <Link to={`detail/${id}`}> </Link>
    return <div onClick={() => {history.push(`detail/${id}`)}}>
        {size == "large" ?
            <Image src={imageSrc} height={400} width={450}/>
            :
            <Image src={imageSrc} height={100} width={220}/>
        }

        <div>
            <Typography.Text type={"secondary"}>{title.slice(0, 25)}</Typography.Text>
            <Typography.Text type={"danger"} strong>$ {price} 起</Typography.Text>
        </div>
    </div>
}

export const ProductImage = withRouter(ProductImageComponent);