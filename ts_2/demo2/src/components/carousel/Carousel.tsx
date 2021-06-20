import React from "react";
import {Image, Carousel as AntCarousel} from "antd";
import img1 from "../../assets/images/carousel_1.jpg"
import img2 from "../../assets/images/carousel_2.jpg"
import img3 from "../../assets/images/carousel_3.jpg"
import {css} from "@emotion/css";

export const Carousel: React.FC = () => {
    return <AntCarousel autoplay className={css`text-align: center;height: 250px;line-height: 250px;background: #364d79;overflow: hidden`}>
        <Image src={img1}/>
        <Image src={img2}/>
        <Image src={img3}/>
    </AntCarousel>
}