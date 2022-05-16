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

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [subscribeError, setSubscribeError] = useState(false);

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
            <VStack spacing="2rem">
              <Introduction />
              <Landing />
            </VStack>
          </main>
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}
