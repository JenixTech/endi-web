
import { 
  Flex, 
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Link
} from '@chakra-ui/react';
import NextLink from "next/link"
import Head from 'next/head';
import ResponsiveStack from '../components/ResponsiveStack';

import Footer from '../components/Sections/Footer';
import NavBar from '../components/Sections/NavBar';
import {Size, useWindowSize} from '../hooks/useWindowSize';

export default function Community() {
  const size: Size = useWindowSize();

  return (
    <Box>
      <Head>
        <title>ENdi - Community Resources</title>
        <meta name="description" content="ENdi: Your personal endometriosis diary" />
      </Head>
      <NavBar />
      <Flex 
        flexDirection="column"
        margin='0 auto'
      >
        <Box flexGrow={2} marginBottom="4rem" marginX="auto" maxWidth="900px">
          <main>
            <VStack spacing="1rem" marginBottom="4rem">
              <Text 
                fontWeight="bold" 
                fontSize="4xl" 
                color="brand.accent"
                textAlign="center"
                marginTop="3rem"
              >
                Community Resources
              </Text>
              <Text 
                fontSize="xl" 
                fontWeight="bold" 
                textAlign="center"
              >
                Don&lsquo;t suffer alone.
              </Text>
              <Text  
                fontSize="lg"
              >
                Endometriosis is a chronic illness surrounded by misconceptions, a lack of awareness, and no simple cure. This can feel overwhelming and unmanageable, but you don&lsquo;t have to face this alone - our community page is here to help. 
              </Text>
              <Text  
                fontSize="lg"
              >
                Below is a list of resources including friendly groups and useful web links, to help you find the right support to better manage and understand your condition.
              </Text>
            </VStack>
            <VStack margin="0 auto" maxW="calc(75vw)">
            <ResponsiveStack 
              stackProps={{
                horizontal: !!(size.width && size.width > 710), 
                spacing: (size.width && size.width > 710) ? "3rem" : "2rem",
                margin: "0 auto",
                maxWidth: "1000px",
                alignItems: "flex-start"
              }}
            >
                <Image
                  src="/images/endo-and-me.png"
                  alt="Endometriosis and me logo"
                  loading="eager"
                  height="6rem"
                  paddingTop=".5rem"
                />
                <VStack 
                  alignItems="flex-start"
                >
                  <Text 
                    fontWeight="bold" 
                    fontSize="2xl" 
                  >
                    Endometriosis & Me
                  </Text>
                  <Text 
                    fontSize="lg"
                  >
                    Kristen McRobie is the creator of Endometriosis and me. She is an Endometriosis advocate and educator. She has worked to provide accurate information to endometriosis sufferers since 2012, and runs a Facebook group to help other endometriosis find, and offer, support.
                  </Text>
                  <HStack paddingTop="1.5rem" spacing="4rem">
                    <NextLink href="https://endometriosisandme.com/" passHref>
                      <Link color="brand.accent" target="_blank">Website</Link>
                    </NextLink>
                    <NextLink href="https://facebook.com/groups/Endometriosisandme" passHref>
                      <Link color="brand.accent" target="_blank">Facebook Group</Link>
                    </NextLink>
                  </HStack>
                </VStack>
              </ResponsiveStack>
            </VStack>
          </main>
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}
