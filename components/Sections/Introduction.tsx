import { 
  Box, 
  Center, 
  Image,
  Link,
  VStack,
  Text,
  Flex
} from '@chakra-ui/react';
import ResponsiveStack from '../ResponsiveStack';
import {Size, useWindowSize} from '../../hooks/useWindowSize';

export default function Introduction() { 
  const size: Size = useWindowSize();

  return (
    <Flex
      width="100%"
      background="brand.primary"
      alignItems="center"
      paddingY="2rem"
    >
      <ResponsiveStack 
        stackProps={{
          horizontal: !!(size.width && size.width > 710), 
          spacing: "0px",
          margin: "0 auto",
          maxWidth: "1000px"
        }}
      >
        <VStack 
          width={(size.width && size.width > 710) ? 2/3 : "100%"}
          textAlign={(size.width && size.width > 710) ? "left" : "center"}
          align={(size.width && size.width > 710) ? "flex-start" : "center"} 
          spacing="2.5rem"
          paddingX="1rem"
          paddingBottom={(size.width && size.width > 710) ? "0px" : "2rem"}
          height="100%"
          margin="0 auto"
        >
          <Text fontWeight="bold" fontSize="4xl" color="brand.accent">Your personal Endometriosis assistant.</Text>
          <Text fontWeight="bold" fontSize="2xl">A no nonsense symptom tracker and journal.</Text>
          <Link href="https://apps.apple.com/us/app/my-endi/id1533158272">
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
    </Flex>
  )
}