import { useState } from 'react';
import { 
  HStack, 
  Center, 
  Flex, 
  Text, 
  Heading, 
  Box, 
  Input, 
  Button,
  Image
} from '@chakra-ui/react';
import Head from 'next/head';

import ResponsiveStack from '../components/ResponsiveStack';
import {Size, useWindowSize} from '../hooks/useWindowSize';

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
    <div>
      <Head>
        <title>ENdi</title>
        <meta name="description" content="ENdi: Your personal endometriosis diary" />
      </Head>
      
      <Flex 
        height='100vh' 
        flexDirection="column"
      >
        <Box flexGrow={2}>
          <main>
            <ResponsiveStack 
              stackProps={{
                horizontal: !!(size.width && size.width > 710), 
                spacing: "0px",
                height: "100%"
              }}
            >
              <Center 
                minWidth={(size.width && size.width < 900) ? "" : "500px"}
                width={(size.width && size.width > 710) ? 1/3 : "100%"} 
                height={(size.width && size.width > 710) ? "100%" : "50%"} 
                bg="brand.secondary" 
                alignItems="center"
              >
                  <Image 
                    src="/endi_screenshot.png"
                    alt="ENdi screenshot on iOS"
                    maxHeight={(size.width && size.width > 710) ? "800px" : "500px"} 
                  />
              </Center>
              <Flex 
                width={(size.width && size.width > 710) ? 2/3 : "100%"} 
                height="100%" 
                justifyContent="center"
                flexDirection="column"
                padding="3rem"
              >
                <Text fontWeight="bold" fontSize="2xl">A mobile app for iOS and Android</Text>
                <Heading 
                  as="h1" 
                  size={(size.width && size.width < 340) ? "3xl" : "4xl"} 
                  marginY="1rem"
                  color="white"
                  textTransform="uppercase"
                >
                  Coming Soon!
                </Heading>
                <Text fontWeight="bold" fontSize="2xl">Enter your email and we'll send you a link as soon as it's available.</Text>
                <Text height="1.5rem" marginTop="1.5rem" color={subscribeError ? 'red' : 'black'}>{subscribeMessage}</Text>
                <ResponsiveStack
                  stackProps={{
                    horizontal: !!(size.width && size.width > 1234),
                    marginY: "0.5rem",
                    alignItems: "flex-start"
                  }}
                >
                  <Input 
                    placeholder="Your email address" 
                    value={email}
                    onChange={handleChange}
                    maxWidth="30rem" 
                    background="white"
                    border="none"
                    size="lg"
                  />
                  <Button 
                    colorScheme="red"
                    size="lg"
                    onClick={() => subscribe()}
                    isLoading={subscribing}
                    loadingText="Submitting"
                  >
                    Let Me Know!
                  </Button>
                </ResponsiveStack>
              </Flex>
            </ResponsiveStack>
          </main>
        </Box>

        <footer>
          <Center flexGrow={1} height="100%">
            <HStack>
              <Text textAlign="center">&copy; 2021 Jenix Technologies LTD. All Rights Reserved.</Text>
            </HStack>
          </Center>
        </footer>
      </Flex>
    </div>
  )
}
