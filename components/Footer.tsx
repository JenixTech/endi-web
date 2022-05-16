import { 
  HStack, 
  VStack,
  Heading, 
  Text,
  Flex,
  Link
} from '@chakra-ui/react';
import NextLink from "next/link"

export default function Footer() {
  return (
    <footer>
      <Flex
        maxWidth='700px'
        flexDirection="column"
        margin='0 auto'
        paddingY="3rem"
        paddingX="1.5rem"
        fontWeight="medium"
        color="grey.50"
      >
        <Flex
          flexDirection="row"
          marginBottom="3rem"
          justifyContent="space-between"
          fontSize="md"
        >
          <Flex
            alignItems="center"
          >
            <Heading size="2xl" color="brand.accent">ENdi</Heading>
          </Flex>
          <VStack align="flex-start">
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
          <VStack align="flex-start">
            <NextLink href="/privacy-policy" passHref>
              <Link >Privacy Policy</Link>
            </NextLink>
            <NextLink href="/terms-of-service" passHref>
              <Link>Terms of Service</Link>
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