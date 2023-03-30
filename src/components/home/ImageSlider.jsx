import React, { useState } from 'react';
import { Box } from '@chakra-ui/react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import banner from "../assets/images/Banner.png"
const images = [
    'https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png',
    'https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png',
    'https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png',
    'https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png',
    'https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png'
]

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickPrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleClickNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };
    return (<>
        <div>
            <div style={{
                display: 'flex', justifyContent: 'center',
            }}>
                <img src={images[currentIndex]} alt={`${currentIndex + 1}`} style={{ maxWidth: '100%' }} />
            </div>
            <button style={{
                display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid white", width: "50px", paddingLeft: "5px", paddingTop: "0px", paddingRight: "5px", paddingButtom: "0px",
                backgroundColor: "black", opacity: "0.5", color: "white",
                position: "absolute", top: "800px", left: "100px"
            }} onClick={handleClickPrev}>{<FaLongArrowAltLeft size={"100%"} />}</button>
            <button style={{
                display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid white", width: "50px", paddingLeft: "5px", paddingTop: "0px", paddingRight: "5px", paddingButtom: "0px",
                backgroundColor: "black", opacity: "0.5", color: "white",
                position: "absolute", top: "800px", right: "100px"
            }} onClick={handleClickNext}>{<FaLongArrowAltRight size={'100%'} />}</button>
        </div >
        <Box pb={5}>
        <img src={banner} alt="banner" />
        </Box>
     </> 
     );

}

export default ImageSlider;
