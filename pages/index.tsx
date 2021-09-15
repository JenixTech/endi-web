import { HStack, Center, Flex, Text, Heading, Box } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ENdi</title>
        <meta name="description" content="ENdi: Your personal endometriosis diary" />
      </Head>
      
      <Flex height='100vh' flexDirection="column">
        <Box flexGrow={2}>
          <main>
            <HStack spacing="0px" height="100%">
              <Center 
                minWidth="500px" 
                width={1/3} 
                height="100%" 
                bg="brand.secondary" 
                alignItems="center"
              >
                <Text>1</Text>
              </Center>
              <Flex 
                width={2/3} 
                height="100%" 
                justifyContent="center"
                flexDirection="column"
                padding="3rem"
              >
                <Text fontWeight="bold" fontSize="2xl">A mobile app for iOS and Android</Text>
                <Heading 
                  as="h1" 
                  size="4xl"
                  marginY="1rem"
                  color="white"
                  textTransform="uppercase"
                >
                  Coming Soon!
                </Heading>
                <Text fontWeight="bold" fontSize="2xl">Enter your email and we'll send you a download link as soon as it's available.</Text>
              </Flex>
            </HStack>
          </main>
        </Box>

        <footer>
          <Center flexGrow={1} height='100%'>
            <HStack>
              <Text>&copy; 2021 Jenix Technologies LTD. All Rights Reserved.</Text>
            </HStack>
          </Center>
        </footer>
      </Flex>
    </div>
  )
}
