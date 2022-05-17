import { useState } from 'react';
import { 
  Text,
  Flex,
  Button,
  Input,
  Heading,
  Textarea,
  VStack
} from '@chakra-ui/react';
import {Size, useWindowSize} from '../../hooks/useWindowSize';

export default function Contact() { 
  const size: Size = useWindowSize();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [hasError, setError] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);

  const send = async () => {
    if (!validateEmail()) {
      setError(true);
      setStatusMessage("Invalid email address");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          feedback: message
        }),
      });
      setSending(false);
      if (response.status >= 300) {
        const json = await response.json();
        setError(!!json.error);
        setStatusMessage(json.error);
      } else {
        if (hasError) {
          setError(false);
        }
        setEmail("");
        setMessage("");
        setStatusMessage("Thanks for reaching out! We'll get back to you as soon as possible.");
        setTimeout(() => setStatusMessage(""), 10000);
      }
    } catch (e) {
      console.error("api error", e);
      setError(true);
      setStatusMessage("Oops, something's gone wrong. Please try again later!");
    }
  };

  const validateEmail = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(mailformat);
  }

  return (
    <Flex
      width="100%"
      flexDirection="column"
      background="brand.primary"
      alignItems="center"
      paddingY="2rem"
      id="contact"
    >
      <Heading>
        Contact
      </Heading>
      <Text fontSize="xl" marginTop="1rem">React out etc</Text>
      <Text 
        height="auto" 
        marginTop="1.5rem" 
        paddingX="1rem"
        color={hasError ? 'red' : 'black'}
      >
        {statusMessage}
      </Text>
      <VStack
        marginY="0.5rem"
        alignItems="center"
      >
        <Input 
          placeholder="Email" 
          value={email}
          onChange={handleEmailChange}
          width={(size.width && size.width > 710) ? "30rem" : "20rem"}
          background="white"
          border="none"
          size="lg"
        />
        <Textarea
          borderRadius="5px"
          background="white"
          border="none"
          size="lg"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
        />
        <Button
          paddingX="2rem" 
          colorScheme="red"
          size="lg"
          onClick={() => send()}
          isLoading={sending}
          loadingText="Submitting"
        >
          Submit
        </Button>
      </VStack>
    </Flex>
  )
}