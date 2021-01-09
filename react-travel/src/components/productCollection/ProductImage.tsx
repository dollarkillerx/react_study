import React from 'react'
import {Image, Typography} from 'antd'

interface PropsType {
    id: string | number
    size: "large" | "small"
    imageSrc: string
    price: number | string
    title: string
}

export const ProductImage: React.FC<PropsType> = ({id, size, imageSrc, price, title}) => {
    return <div>
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