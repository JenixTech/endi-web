import { 
  Box, 
  Center, 
  Image,
  Flex,
  VStack,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';

import { BsCheck2Square, BsGraphUp, BsPencilSquare } from 'react-icons/bs';
import { GrUserSettings } from 'react-icons/gr';

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
            src="/images/statistics-scene.png"
            alt="ENdi statistics screen screenshot on iOS"
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
          <Text fontWeight="bold" fontSize="4xl" color="brand.accent">Build an in-depth understanding about your endometriosis.</Text>
          <ResponsiveStack 
            stackProps={{
              horizontal: !!(size.width && size.width > 710), 
              justifyContent: "space-between",
              margin: "0 auto",
              maxWidth: "1000px",
              spacing: "2rem"
            }}
          >
            <List spacing={5}>
              <ListItem>
                <ListIcon as={BsPencilSquare} w={6} h={6} />
                <Text fontWeight="bold">Track your symptoms</Text>
                <Text>Journal every day to see your triggers and patterns</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={BsGraphUp} w={6} h={6} />
                <Text fontWeight="bold">Understand the affects</Text>
                <Text>See direct links between your health and time off</Text>
              </ListItem>
            </List>
            <List spacing={5}>
              <ListItem>
                <ListIcon as={GrUserSettings} w={6} h={6} />
                <Text fontWeight="bold">Personalized to you</Text>
                <Text>Adapt menus and data collection to your own routine and lifestyle</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2Square} w={6} h={6} />
                <Text fontWeight="bold">No more nonsense</Text>
                <Text>View your findings in easy-to-understand graphs and charts</Text>
              </ListItem>
            </List>
          </ResponsiveStack>
        </VStack>
      </ResponsiveStack>
    </Flex>
  )
}