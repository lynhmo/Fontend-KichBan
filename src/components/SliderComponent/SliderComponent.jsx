import React from 'react'
import Slider from 'react-slick'
import { Image } from 'antd'

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider settings={settings}>
            {arrImages.map((image) => {
                return (
                    <Image src={image} alt="slider" preview={false} width="100%"/>
                )
            })}
        </Slider>
    )
}

export default SliderComponent