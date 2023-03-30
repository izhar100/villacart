import { Text, Box, Flex,} from '@chakra-ui/react';
import PaymentOptions from "../assets/images/PaymentMethod.png"
const Footer=()=>{
    return <>
       <Box bg="#902735" textColor={'white'} fontFamily={"Georgia"} pt={5} pb={2}>
        <Flex width={'80%'} margin="auto" justifyContent={'space-between'}>
          <Box width={'23%'}>
            <Text>About Us</Text>
            <Text>India's most convenient online grocery channel Buyerapp Fresh and Smart makes your grocery shopping even simpler. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets - now shop from the comfort of your home; office, or on the move. We offer you the convenience of shopping for everything that you need for your home - be it fresh fruits & vegetables, rice, dals, oil, packaged food, dairy item, frozen, pet food, household cleaning items & personal care products from a single virtual store.</Text>
          </Box>
          <Box width={'23%'}>
            <Text>OUR COMPANY</Text>
            <Text>About Us</Text>
            <Text>Contact Us</Text>
          </Box>
          <Box width={'23%'}>
            <Text>TOP CATEGORIES</Text>
            <Text>Grocery</Text>
          </Box>
          <Box width={'23%'}>
            <Text>POLICIES & INFO</Text>
            <Text>Privacy Policy</Text>
            <br />
            <Text>SUPPORT</Text>
            <Text>For Help, send an email to care@villacards.com</Text>
          </Box>
        </Flex>
        <Box width="80%" margin={'auto'} mt='10px'>
            <Text>PAYMENT OPTIONS</Text>
                <img width={'150px'} src={PaymentOptions} alt="payments" />
        </Box>
       </Box>
    </>
}
export {Footer}