/* eslint-disable @next/next/no-css-tags */
import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/Sections/Footer';
import NavBar from '../components/Sections/NavBar';

export default function MedicalDisclaimer() {
  return (
    <Box>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="ENdi: Privacy Policy" />
        <link rel='stylesheet' href='./global.css'></link>
      </Head>
      <NavBar />
      <Flex 
        flexDirection="column"
        margin='0 auto'
      >
        <Box flexGrow={2}  h='calc(100vh)'>
          <div className="privacy-policy">
            <h1>Medical Disclaimer</h1>
            <p>Last updated: May 11, 2022</p>
            <br />
            <p>ENdi App is not medical or treatment advice, professional diagnosis, opinion, or services – and may not be treated as such by the user. As such, this App may not be relied upon for the purposes of medical diagnosis or as a recommendation for medical care or treatment. If you have any concerns or questions about your health, you should always consult with a Doctor or other health-care professional.</p>
          </div>
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}