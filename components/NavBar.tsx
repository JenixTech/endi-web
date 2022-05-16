import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Box, Heading, Image, IconButton, Menu, MenuButton, MenuItem, MenuList, HStack, Link } from '@chakra-ui/react';
import {Size, useWindowSize} from '../hooks/useWindowSize';
import NextLink from "next/link"

export default function NavBar() {
  const size: Size = useWindowSize();

  return (
    <nav>
    <Flex
      height='4.5rem'
      maxWidth='1000px'
      margin='0 auto'
      flexDirection="row"
      paddingX="1rem"
      paddingY='2.5rem'
      alignItems='center'
      justifyContent='space-between'
      fontWeight="medium"
    >
      <Flex
        flexDirection="row"
        alignItems='center'
      >
        <Image
          fallback={<Box maxHeight={(size.width && size.width > 710) ? "800px" : "500px"} />}
          src="/images/logo.png"
          alt="ENdi screenshot on iOS"
          loading="eager"
          height="6rem"
          width="6rem" 
        />
        <Heading color="brand.accent">ENdi</Heading>
      </Flex>
      {(size.width && size.width > 710) ? (
        <Flex
          flexDirection="row"
          alignItems='center'
        >
          <HStack spacing="2rem">
            <NextLink href="/" passHref>
              <Link>Home</Link>
            </NextLink>
            <NextLink href="/faqs" passHref>
              <Link>FAQs</Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link>Contact</Link>
            </NextLink>
          </HStack>
        </Flex>
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem>
              Home
            </MenuItem>
            <MenuItem>
              FAQs
            </MenuItem>
            <MenuItem>
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      )}

    </Flex>
    </nav>

  )
}