import { useState } from 'react';
import { 
  Flex, 
  Box,
  VStack 
} from '@chakra-ui/react';
import Head from 'next/head';

import Footer from '../components/Sections/Footer';
import NavBar from '../components/Sections/NavBar';

export default function FAQs() {
  return (
    <Box>
      <Head>
        <title>ENdi - FAQs</title>
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
            </VStack>
          </main>
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}
