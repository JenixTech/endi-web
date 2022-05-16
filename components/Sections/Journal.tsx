import { 
  Box, 
  Center, 
  Image,
  Link,
  VStack,
  Text
} from '@chakra-ui/react';
import ResponsiveStack from '../ResponsiveStack';
import {Size, useWindowSize} from '../../hooks/useWindowSize';

export default function Journal() { 
  const size: Size = useWindowSize();

  return (
    <ResponsiveStack 
      stackProps={{
        horizontal: !!(size.width && size.width > 710), 
        spacing: "0px",
        bg: "brand.secondary"
      }}
  >
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
  </ResponsiveStack>
  )
}