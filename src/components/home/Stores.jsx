import React from 'react'
import { Flex} from '@chakra-ui/react';
import { Text, Box } from '@chakra-ui/react';
import { MdRoom, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Stores = () => {
    const images = [
        'https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63ea60ae1a90f3c6e36a8d6b/logo-napcl.png',
        'https://d2pyicwmjx3wii.cloudfront.net/s/573db1519f0d58741f0cc5c1/6267b57a66d3dffc591fa27b/img-20200626-wa0018.jpg',
        'https://d2pyicwmjx3wii.cloudfront.net/s/573db1519f0d58741f0cc5c1/6267b57a66d3dffc591fa27b/img-20200626-wa0018.jpg',
        'https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63ed2e828cda983cf9624f40/logo-singhretail.png',
        'https://d2pyicwmjx3wii.cloudfront.net/s/573db1519f0d58741f0cc5c1/6267b57a66d3dffc591fa27b/img-20200626-wa0018.jpg',
        'https://d2pyicwmjx3wii.cloudfront.net/s/573db1519f0d58741f0cc5c1/ms.users/5e3912a6c898d862b218f90a/5e390d7645d1124d51c97c56.jpg',
        'https://cdn.sellerapp.in/Logos/slrp-1404164.jpg',
        'https://d2pyicwmjx3wii.cloudfront.net/s/573db1519f0d58741f0cc5c1/6267b57a66d3dffc591fa27b/img-20200626-wa0018.jpg',
    ];
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % (images.length));
        }, 4000);
        return () => clearInterval(intervalId);
    }, [currentSlide,images.length]);

    const handlePrevClick = () => {
        setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1
        );
    };

    const handleNextClick = () => {
        setCurrentSlide((currentSlide + 1) % (images.length));
    };

    const displayImages = images.concat(images).concat(images).concat(images);

    return (<>
        <Text p={5} fontSize={"30px"} align={"center"} >Stores Near Me</Text>
        <button onClick={handlePrevClick} style={{
            position: "absolute",
            top: "297px",
            left: "1px",

        }}>{<MdKeyboardArrowLeft size={"15%"} />}</button>
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
                    <div key={index} style={{ display: "flex", alignItems: "center", width: "10%", flexShrink: 0, paddingBottom: "20px", paddingTop: "10px" }}>
                        <Flex width={"100%"} gap="5px" pt={"20px"} pb={"20px"} pl={"4px"} borderRadius={"10px"} shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                style={{ width: '80px', height: "80px", borderRadius: "50%" }}
                            />
                            <Box fontFamily={'Georgia'}>
                                <Text as="b" color={'#454545'}>Ali Retail Shop,Giridih</Text>
                                <Text color={'#625E5E'} display={"flex"} alignItems={'center'}><MdRoom /> 100KM</Text>
                                <Text color={'#625E5E'}>Packed Food</Text>
                            </Box>
                        </Flex>
                    </div>
                ))}
            </div>
        </div>
        <button onClick={handleNextClick} style={{
            position: "absolute",
            right: "-260px",
            top: "295px",
        }}>{<MdKeyboardArrowRight size={'15%'} />}</button>
    </>
    );
}

export default Stores
