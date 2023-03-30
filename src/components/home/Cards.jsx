import { Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Cards = () => {
    return (
        <>
            <Grid margin={'auto'} marginBottom={"20px"} width={'90%'} templateColumns='repeat(2, 1fr)' gap={8}>
               <Link to='/'><img src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" alt="card1" /></Link>
               <Link to='/'><img src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" alt="card2" /></Link>
               <Link to='/'><img src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" alt="card3" /></Link>
               <Link to='/'><img src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" alt="card4" /></Link>
            </Grid>
        </>
    )
}

export default Cards
