import { useState } from 'react';
import { 
  HStack,
  VStack, 
  Center, 
  Flex, 
  Text, 
  Heading, 
  Box, 
  Link, 
  Image
} from '@chakra-ui/react';
import Head from 'next/head';

import ResponsiveStack from '../components/ResponsiveStack';
import {Size, useWindowSize} from '../hooks/useWindowSize';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [subscribeError, setSubscribeError] = useState(false);
  const size: Size = useWindowSize();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

  const subscribe = async () => {
    setSubscribing(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Email: email,
        }),
      });
      setSubscribing(false);
      if (response.status >= 300) {
        const json = await response.json();
        setSubscribeError(!!json.error);
        setSubscribeMessage(json.error);
      } else {
        if (subscribeError) {
          setSubscribeError(false);
        }
        setEmail("");
        setSubscribeMessage("Thanks! We can't wait to let you know when ENdi is ready!");
        setTimeout(() => setSubscribeMessage(""), 3000);
      }
    } catch (e) {
      console.error("api error", e);
      setSubscribeError(true);
      setSubscribeMessage("Oops, something's gone wrong. Please try again later!");
    }
  };

  // IF WINDOW IS LESS THAN 710, CHANGE TO VERTICAL LAYOUT

  return (
    <Box>
      <Head>
        <title>ENdi</title>
        <meta name="description" content="ENdi: Your personal endometriosis diary" />
      </Head>
      <NavBar />
      <Flex 
        maxWidth='900px'
        flexDirection="column"
        margin='2rem auto 0 auto'
      >
        <Box flexGrow={2}>
          <main>
            <ResponsiveStack 
              stackProps={{
                horizontal: !!(size.width && size.width > 710), 
                spacing: "0px"
              }}
            >
              <VStack 
                width={(size.width && size.width > 710) ? 2/3 : "100%"} 
                align="flex-start"
                spacing="2.5rem"
                paddingX="1rem"
                height="100%"
              >
                <Text fontWeight="bold" fontSize="2xl">Your personal Endometriosis assistant.</Text>
                <Text fontWeight="bold" fontSize="2xl">A no nonsense symptom tracker and daily record journal.</Text>
                <Link href="">
                  <Image 
                    src="/images/app-store.svg"
                    alt="Download on the App Store icon"
                    height="4rem"
                  />
                </Link>
              </VStack>
              <Center 
                minWidth={(size.width && size.width < 900) ? "" : "300px"}
                width={(size.width && size.width > 710) ? 1/3 : "100%"} 
                height={(size.width && size.width > 710) ? "100%" : "50%"} 
                alignItems="center"
              >
                <Image
                  fallback={<Box maxHeight={(size.width && size.width > 710) ? "800px" : "500px"} />}
                  src="/images/landing-screen.png"
                  alt="ENdi landing screen screenshot on iOS"
                  loading="lazy"
                  maxHeight={(size.width && size.width > 710) ? "800px" : "500px"} 
                />
              </Center>
            </ResponsiveStack>
          </main>
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}
