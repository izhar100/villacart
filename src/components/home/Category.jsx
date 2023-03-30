import React from 'react'
import { Flex} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 4 }
// ];
const images = [
    'https://cdn.plotch.io/image/upload/C/V/1676285392_My5wbmc=.png',
    'https://cdn.plotch.io/image/upload/C/V/1676285398_NC5wbmc=.png',
    'https://cdn.plotch.io/image/upload/C/V/1676285404_NS5wbmc=.png',
    'https://cdn.plotch.io/image/upload/C/V/1676285387_Mi5wbmc=.png',
    'https://cdn.plotch.io/image/upload/C/V/1676285409_Ni5wbmc=.png',
    'https://cdn.plotch.io/image/upload/C/V/1676285414_Ny5wbmc=.png',
    'https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png',
    'https://cdn.plotch.io/image/upload/C/V/1676285398_NC5wbmc=.png',

]

const Category = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const handlePrevClick = () => {
        setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1
        );
    };

    const handleNextClick = () => {
        setCurrentSlide((currentSlide + 1) % (images.length));
    };

    const displayImages = images.concat(images).concat(images).concat(images);
    return (
        <>
            <Text fontSize={'25px'} textAlign='center'>Shop By Category</Text>
            <button onClick={handlePrevClick} style={{
            position: "absolute",
            top: "500px",
            left: "1px",

        }}>{<MdKeyboardArrowLeft color='#AEAEAE' size={"15%"} />}</button>
        <div
            style={{
                display: 'flex',
                width: "95%",
                flexWrap: 'wrap',
                overflow: 'hidden',
                position: 'relative',
                margin: "auto"
            }}
        >
            <div
                style={{
                    display: 'flex',
                    transform: `translateX(${-currentSlide * 25}%)`,
                    transition: 'transform 0.5s ease',
                    gap: "1.5%",
                }}
            >
                {displayImages.map((image, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", width: "20%", flexShrink: 0, paddingBottom: "20px", paddingTop: "10px" }}>
                        <Flex width={"100%"} gap="5px" borderRadius={"10px"}>
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                style={{width:"100%"}}
                            />
                        </Flex>
                    </div>
                ))}
            </div>
        </div>
        <button onClick={handleNextClick} style={{
            position: "absolute",
            right: "-260px",
            top: "500px",
        }}>{<MdKeyboardArrowRight color='#AEAEAE' size={'15%'} />}</button>

        </>
    )
}

export default Category
