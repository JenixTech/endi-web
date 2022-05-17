import { 
  Box, 
  Center, 
  Image,
  Flex,
  VStack,
  Text,
  Link
} from '@chakra-ui/react';
import ResponsiveStack from '../ResponsiveStack';
import {Size, useWindowSize} from '../../hooks/useWindowSize';

export default function Statistics() { 
  const size: Size = useWindowSize();

  return (
    <Flex
      width="100%"
      background="brand.secondary"
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
        <Center 
          minWidth={(size.width && size.width < 900) ? "" : "300px"}
          width={(size.width && size.width > 710) ? 1/3 : "100%"} 
          height={(size.width && size.width > 710) ? "100%" : "50%"} 
          alignItems="center"
          paddingBottom={(size.width && size.width > 710) ? "0px" : "2rem"}
        >
          <Image
            fallback={<Box maxHeight={(size.width && size.width > 710) ? "800px" : "500px"} />}
            src="/images/home-screen.png"
            alt="ENdi home screen screenshot on iOS"
            loading="lazy"
            maxHeight={(size.width && size.width > 710) ? "800px" : "500px"} 
          />
        </Center>
        <VStack 
          width={(size.width && size.width > 710) ? 2/3 : "100%"} 
          textAlign={(size.width && size.width > 710) ? "left" : "center"}
          align={(size.width && size.width > 710) ? "flex-start" : "center"} 
          spacing="2.5rem"
          paddingLeft={(size.width && size.width > 710) ? "10rem" : "2rem"}
          margin="0 auto"
          height="100%"
        >
          <Text fontWeight="bold" fontSize="4xl" color="brand.accent">Track symptoms, triggers, appointments, and more</Text>
          <Text fontWeight="bold" fontSize="2xl">Gain a better understanding of your endometriosis for a brighter, healthier future.</Text>
          {/* <Link href="">
            <Image 
              src="/images/app-store.svg"
              alt="Download on the App Store icon"
              height="4rem"
            />
          </Link> */}
        </VStack>
      </ResponsiveStack>
    </Flex>
  )
}