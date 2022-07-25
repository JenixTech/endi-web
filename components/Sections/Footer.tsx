import { 
  HStack, 
  VStack,
  Heading, 
  Text,
  Flex,
  Link
} from '@chakra-ui/react';
import NextLink from "next/link"
import { Size, useWindowSize } from '../../hooks/useWindowSize';
import Logo from '../Logo';

export default function Footer() {
  const size: Size = useWindowSize();

  return (
    <footer>
      <Flex
        maxWidth='700px'
        flexDirection="column"
        margin='0 auto'
        paddingY="3rem"
        paddingX="1.5rem"
        fontWeight="medium"
        color="grey.100"
        background="brand.primary"
      >
        <Flex
          flexDirection={(size.width && size.width > 710) ? "row" : "column"}
          marginBottom="3rem"
          justifyContent="space-between"
          fontSize="md"
        >
          <Flex
            alignItems="center"
          >
            <Logo colored={false} />
          </Flex>
          <VStack 
            align="flex-start" 
            marginY={(size.width && size.width > 710) ? "0px" : "1rem"}
            paddingX={(size.width && size.width > 710) ? "0x" : "1.5rem"}
          >
            <NextLink href="/" passHref>
              <Link>Home</Link>
            </NextLink>
            <NextLink href="/faqs" passHref>
              <Link>FAQs</Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link>Contact</Link>
            </NextLink>
          </VStack>
          <VStack align="flex-start" paddingX={(size.width && size.width > 710) ? "0x" : "1.5rem"}>
            <NextLink href="/privacy-policy" passHref>
              <Link >Privacy Policy</Link>
            </NextLink>
            <NextLink href="/terms-of-service" passHref>
              <Link>Terms of Service</Link>
            </NextLink>
            <NextLink href="/medical-disclaimer" passHref>
              <Link>Medical Disclaimer</Link>
            </NextLink>
          </VStack>
        </Flex>
        <Text 
          fontSize="small" 
          textAlign="center"
        >&copy; 2022 Jenix Technologies LTD. All Rights Reserved.</Text>
      </Flex>
    </footer>
  )
}