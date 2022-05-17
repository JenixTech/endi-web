import { useState } from 'react';
import { 
  Flex, 
  Box,
  VStack 
} from '@chakra-ui/react';
import Head from 'next/head';

import Footer from '../components/Sections/Footer';
import NavBar from '../components/Sections/NavBar';
import Introduction from '../components/Sections/Introduction';
import Journal from '../components/Sections/Journal';
import Landing from '../components/Sections/Landing';
import Statistics from '../components/Sections/Statistics';
import Contact from '../components/Sections/Contact';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>ENdi</title>
        <meta name="description" content="ENdi: Your personal endometriosis diary" />
      </Head>
      <NavBar />
      <Flex 
        flexDirection="column"
        margin='0 auto'
      >
        <Box flexGrow={2}>
          <main>
            <VStack>
              <Introduction />
              <Landing />
              <Journal />
              <Statistics />
              <Contact />
            </VStack>
          </main>
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}
